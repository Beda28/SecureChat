from fastapi import Depends
from db.mysql import engine, model
from sqlalchemy import select, and_, update, union_all, literal_column
from sqlalchemy.ext.asyncio import AsyncSession
from uuid import uuid4

async def friendgetList(uuid: str, db: AsyncSession = Depends(engine.get_db)):
    union_query = union_all(
            select(model.Friend.user_uuid.label("friend")).where(model.Friend.send_uuid == uuid),
            select(model.Friend.send_uuid.label("friend")).where(model.Friend.user_uuid == uuid)
        ).subquery()

    friendList = await db.execute(select(model.User.id)
        .join(
            union_query,
            model.User.uuid == union_query.c.friend
        ))

    return friendList.scalars().all()

async def friendList(uuid: str, db: AsyncSession = Depends(engine.get_db)):
    sent_query = (
                    select(model.reqFriend.user_uuid.label('friend'),
                        model.reqFriend.state,
                        literal_column("'recive'").label("type")
                    ).where(model.reqFriend.send_uuid == uuid)
                )
    
    recive_query = (
                    select(model.reqFriend.send_uuid.label('friend'),
                        model.reqFriend.state,
                        literal_column("'sent'").label("type")
                    ).where(model.reqFriend.user_uuid == uuid)
                )

    union_query = union_all(sent_query, recive_query).subquery()

    submitList = await db.execute(
        select(model.User.id,
                union_query.c.type
               ).join(union_query, model.User.uuid == union_query.c.friend)
               .where(union_query.c.state == 'send')
    )

    result = submitList.all()
    return [row._asdict() for row in result]

async def friendPost(uuid: str, submit_id: str, db: AsyncSession = Depends(engine.get_db)):
    submit_result = await db.execute(select(model.User.uuid).where(model.User.id == submit_id))
    submit_uuid = submit_result.scalar_one_or_none()

    if not submit_uuid:
        return {"message": "존재하지 않는 사용자입니다."}
    
    state = await db.execute(select(model.reqFriend)
                .where(and_(
                    model.reqFriend.user_uuid == uuid,
                    model.reqFriend.send_uuid == submit_uuid,
                    model.reqFriend.state == 'send'
                ))
            )
    
    if state.scalars().first():
        return {"message" : "이미 친구요청을 보냈습니다!"}
    
    else:
        try:
            add_user = model.reqFriend(user_uuid=uuid, send_uuid=submit_uuid, state='send')
            db.add(add_user)

            await db.commit()
            return {"message" : "친구요청성공"}
        except Exception as e:
            await db.rollback()
            return {e}

async def submitcancel(user_uuid: str, send_id: str, db: AsyncSession = Depends(engine.get_db)):
    try:
        submit_result = await db.execute(select(model.User.uuid).where(model.User.id == send_id))
        submit_uuid = submit_result.scalar_one_or_none()

        status = await db.execute(select(model.reqFriend)
                    .where(and_(
                        model.reqFriend.user_uuid==user_uuid, 
                        model.reqFriend.send_uuid==submit_uuid,
                        model.reqFriend.state == 'send'
                    )))
        res = status.scalar_one_or_none()

        if res:
            await db.delete(res)
            await db.commit()
            return {"message" : "취소 성공"}
        else:
            return {"message" : "유효하지 않은 요청입니다."}
    except Exception as e:
        await db.rollback()
        return {e}
    
async def submitdeny(user_uuid: str, send_id: str, db: AsyncSession = Depends(engine.get_db)):
    try:
        submit_result = await db.execute(select(model.User.uuid).where(model.User.id == send_id))
        submit_uuid = submit_result.scalar_one_or_none()

        status = await db.execute(select(model.reqFriend)
                    .where(and_(
                        model.reqFriend.user_uuid==submit_uuid, 
                        model.reqFriend.send_uuid==user_uuid,
                        model.reqFriend.state == 'send'
                    )))
        res = status.scalar_one_or_none()

        if not res:
            return {"message" : "유효하지 않은 요청입니다."}
        else:
            await db.delete(res)
            await db.commit()
            return {"message" : "거절 성공"}
    except Exception as e:
        print("취소 실패", e)
        await db.rollback()
        return {e}

async def submitaccept(user_uuid: str, send_id: str, db: AsyncSession = Depends(engine.get_db)):
    try:
        submit_result = await db.execute(select(model.User.uuid).where(model.User.id == send_id))
        submit_uuid = submit_result.scalar_one_or_none()

        status = await db.execute(select(model.reqFriend)
                    .where(and_(
                        model.reqFriend.user_uuid==submit_uuid, 
                        model.reqFriend.send_uuid==user_uuid,
                        model.reqFriend.state == 'send'
                    )))
        res = status.scalar_one_or_none()

        if not res:
            return {"message" : "유효하지 않은 요청입니다."}
        else:
            await db.execute(update(model.reqFriend)
                .where(and_(
                    model.reqFriend.user_uuid == submit_uuid, 
                    model.reqFriend.send_uuid == user_uuid,
                    model.reqFriend.state == 'send')
                ).values({model.reqFriend.state:"friend"}))

            chatid = uuid4()
            add_friend = model.Friend(user_uuid=submit_uuid, send_uuid=user_uuid, chat_uuid=chatid)
            db.add(add_friend)

            await db.commit()
            return {"message" : "친구 추가 완료", "uuid" : chatid}

    except Exception as e:
        await db.rollback()
        return {e}