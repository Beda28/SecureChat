from fastapi import APIRouter, Depends
from db.mysql import engine
from sqlalchemy.ext.asyncio import AsyncSession
from model import post_model
from controller import auth, friend, friendchat, server

router = APIRouter()

@router.post('/api/user/login')
async def login(user_info : post_model.Post_User, db : AsyncSession = Depends(engine.get_db)):
    return await auth.login(user_info.user_id, user_info.user_pw, db)

@router.post('/api/user/register')
async def register(user_info : post_model.Post_User, db : AsyncSession = Depends(engine.get_db)):
    return await auth.register(user_info.user_id, user_info.user_pw, db)

@router.post('/api/friend/getlist')
async def getList(user_info: post_model.ID_Only, db : AsyncSession = Depends(engine.get_db)):
    return await friend.friendgetList(user_info.user_id, db)

@router.post('/api/friend/sendlist')
async def sendList(user_info : post_model.ID_Only, db : AsyncSession = Depends(engine.get_db)):
    return await friend.friendList(user_info.user_id, db)

@router.post('/api/friend/submit')
async def submit(info: post_model.Post_Friend, db : AsyncSession = Depends(engine.get_db)):
    return await friend.friendPost(info.user_id, info.submit_id, db)

@router.post('/api/friend/cancel')
async def cancel(info: post_model.Post_Friend, db : AsyncSession = Depends(engine.get_db)):
    return await friend.submitcancel(info.user_id, info.submit_id, db)

@router.post('/api/friend/deny')
async def deny(info: post_model.Post_Friend, db : AsyncSession = Depends(engine.get_db)):
    return await friend.submitdeny(info.user_id, info.submit_id, db)

@router.post('/api/friend/accept')
async def accept(info: post_model.Post_Friend, db: AsyncSession = Depends(engine.get_db)):
    return await friend.submitaccept(info.user_id, info.submit_id, db)

@router.post('/api/chat/getchat')
async def getchat(info: post_model.Post_Friend, db: AsyncSession = Depends(engine.get_db)):
    return await friendchat.getchat(info.user_id, info.submit_id, db)

@router.post('/api/server/chatget')
async def getserverchat(info: post_model.ID_Only):
    return await friendchat.getserverchat(info.user_id)

@router.post('/api/server/getInserver')
async def getinserverlist(info: post_model.ID_Only, db:AsyncSession = Depends(engine.get_db)):
    return await server.getinserver(info.user_id, db)

@router.post('/api/server/get')
async def getserver(uuid: post_model.ID_Only, db: AsyncSession = Depends(engine.get_db)):
    return await server.firstconnection(uuid.user_id, db)

@router.post('/api/server/add')
async def addserver(info: post_model.addserver, db: AsyncSession = Depends(engine.get_db)):
    return await server.addserver(info.user_uuid, info.server_name, db)

@router.post('/api/server/addchannel')
async def addchannel(info: post_model.addchannel, db: AsyncSession = Depends(engine.get_db)):
    return await server.addchannel(info.server_name, info.channel_name, db)

@router.post('/api/server/getuserlist')
async def getuserlist(info: post_model.ID_Only, db: AsyncSession = Depends(engine.get_db)):
    return await server.getuserlist(info.user_id, db)

@router.post('/api/server/invite')
async def inviteuser(info: post_model.inviteserver, db: AsyncSession = Depends(engine.get_db)):
    return await server.inviteuser(info.user_id, info.server_name, db)