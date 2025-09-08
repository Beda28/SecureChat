from pydantic import BaseModel

class Post_User(BaseModel):
    user_id: str
    user_pw: str

class Post_Friend(BaseModel):
    user_id: str
    submit_id: str

class ID_Only(BaseModel):
    user_id: str

class send_Chat(BaseModel):
    user_id: str
    send_id: str
    content: str

class addserver(BaseModel):
    user_uuid: str
    server_name: str

class addchannel(BaseModel):
    server_name: str
    channel_name: str

class inviteserver(BaseModel):
    user_id: str
    server_name: str

class lastchannel(BaseModel):
    user_id: str
    last_server: str
    last_channel: str