from fastapi import Depends
from sqlalchemy import select, and_
from sqlalchemy.ext.asyncio import AsyncSession
from db.mysql import model, engine
from uuid import uuid4
from db.redis import redis as redi
import redis.asyncio

async def firstconnection(uuid: str, db: AsyncSession = Depends(engine.get_db)):
    room_id = await db.execute(select(model.Server.server_name)
                .join(model.Server_User, model.Server.server_uuid == model.Server_User.server_uuid)
                .where(model.Server_User.user_uuid == uuid))
    room_list = room_id.scalars().all()
    return room_list

async def getinserver(user_uuid: str, server: str, db: AsyncSession = Depends(engine.get_db), rds: redis = Depends(redi.get_redis_client)):
    query_result = await db.execute(select(
        model.Server_in_Server.channel_id, 
        model.Server_in_Server.channel_uuid)
        .join(model.Server, model.Server.server_uuid == model.Server_in_Server.server_uuid)
        .where(model.Server.server_name == server))
    result = query_result.all()

    key = f'user:channel:{user_uuid}'
    field = server
    rsstate = await rds.hget(key, field)

    if rsstate is None:
        if result:
            value = result[0].channel_uuid
            await rds.hset(key, field, value)
            rsstate = value
    
    return {"channel" : [row._asdict() for row in result], "last": rsstate}

async def addserver(uuid: str, servername: str, db: AsyncSession = Depends(engine.get_db)):
    server_uuid = uuid4()
    fchannel_uuid = uuid4()
    try:
        query = model.Server(
                server_name = servername,
                server_uuid = server_uuid,
                owner_uuid = uuid)
        db.add(query)

        query = model.Server_User(
                server_uuid = server_uuid,
                user_uuid = uuid
        )
        db.add(query)

        query = model.Server_in_Server(
                server_uuid = server_uuid,
                channel_uuid = fchannel_uuid,
                channel_id = "일반"
        )
        db.add(query)
        await db.commit()
        return {"active" : True}

    except Exception as e:
        db.rollback()
        print(e)
        return {"message" : "서버 오류", "active" : False}
    
async def addchannel(server_name: str, channel_name: str, db: AsyncSession = Depends(engine.get_db)):
    new_uuid = uuid4()
    try:
        server_uuid = await db.execute(select(model.Server.server_uuid).where(model.Server.server_name == server_name))
        suuid = server_uuid.scalar_one_or_none()
        query = model.Server_in_Server(server_uuid=suuid, channel_id=channel_name, channel_uuid=new_uuid)
        db.add(query)
        await db.commit()
        return {"message" : "성공", "active" : True, "channel_uuid" : new_uuid}
        
    except Exception as e:
        await db.rollback()
        return {"message" : "서버 오류", "active" : False}
    
async def getuserlist(id: str, db: AsyncSession = Depends(engine.get_db)):
    try:
        state = await db.execute(select(model.User.id)
        .select_from(model.Server)
        .join(model.Server_User, model.Server.server_uuid == model.Server_User.server_uuid)
        .join(model.User, model.Server_User.user_uuid == model.User.uuid)
        .where(model.Server.server_name == id))

        slist = state.scalars().all()
        return slist
    
    except Exception as e:
        print('에러남', e)
        return
    
async def inviteuser(user_id: str, server_name: str, db: AsyncSession = Depends(engine.get_db)):
    try:
        result = await db.execute(select(model.User.uuid).where(model.User.id == user_id))
        res = result.scalar_one_or_none()

        state = await db.execute(select(model.Server.server_uuid).where(model.Server.server_name == server_name))
        server = state.scalar_one_or_none()
        
        lit = await db.execute(select(model.Server_User).where(and_(model.Server_User.server_uuid==server, model.Server_User.user_uuid == res)))
        if lit.scalar_one_or_none(): return {"message" : "초대 실패 : 이미 서버에 존재하는 사용자입니다.", "active" : False}

        query = model.Server_User(server_uuid=server, user_uuid=res)
        db.add(query)
        await db.commit()
        return {"message" : "초대 성공", "active" : True}
    
    except Exception as e:
        db.rollback()
        return {"message" : "초대 실패 : 서버오류", "active" : False}