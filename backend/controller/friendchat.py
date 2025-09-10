from fastapi import Depends
from sqlalchemy import select, and_, or_
from sqlalchemy.ext.asyncio import AsyncSession
from db.mysql import model as mm, engine
from db.mongo import model

async def getchat(uuid: str, send_id: str, db: AsyncSession = Depends(engine.get_db)):
    submit_result = await db.execute(select(mm.User.uuid).where(mm.User.id == send_id))
    submit_uuid = submit_result.scalar_one_or_none()
    
    data = or_(
        and_(
            mm.Friend.user_uuid == uuid,
            mm.Friend.send_uuid == submit_uuid
        ),
        and_(
            mm.Friend.user_uuid == submit_uuid,
            mm.Friend.send_uuid == uuid
        )
    )
    
    state = await db.execute(select(mm.Friend.chat_uuid).where(data))
    res = state.scalars().first()

    result = model.FriendMessage.find({model.FriendMessage.room_uuid : res})
    result_list = await result.to_list()
    return {"result" : result_list, "uuid" : res}

async def getserverchat(server_id: str, db:AsyncSession = Depends(engine.get_db)):
    name = await db.execute(select(mm.Server_in_Server.channel_id).where(mm.Server_in_Server.channel_uuid == server_id))
    server_name = name.scalar_one_or_none()
    
    result = model.FriendMessage.find({model.FriendMessage.room_uuid : server_id})
    result_list = await result.to_list()
    return {"result" : result_list, "name" : server_name}