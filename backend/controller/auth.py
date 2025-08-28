from fastapi import Depends
from db.mysql import engine, model
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import IntegrityError
from controller import token
from uuid import uuid4
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

async def login(id: str, pw: str, db: AsyncSession = Depends(engine.get_db)):
    user = await db.execute(select(model.User).where(model.User.id == id))
    info = user.scalars().first()
    if not info: return {"message" : "로그인 실패"}

    if pwd_context.verify(pw, info.pw):
        jwtoken = await token.getToken(id, info.uuid)
        return {"token" : jwtoken, "token_type": "bearer"}
    
    else:
        return {"message" : "로그인 실패"}
    
async def register(id: str, pw: str, db: AsyncSession = Depends(engine.get_db)):
    password = pwd_context.hash(pw)
    user_uuid = uuid4()
    try:
        adduser = model.User(uuid=user_uuid, id=id, pw=password)
        db.add(adduser)
        
        await db.commit()
        jwtoken = await token.getToken(id, user_uuid)
        return {"token" : jwtoken, "token_type": "bearer"}
    except Exception as e:
        await db.rollback()
        print('오류로그 - ', e)
        return {"message" : "회원가입 실패"}
        