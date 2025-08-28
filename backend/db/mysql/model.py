from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, CHAR, VARCHAR, Enum

Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    uuid = Column(CHAR(36), nullable=False, primary_key=True)
    id = Column(VARCHAR(10), nullable=False, unique=True)
    pw = Column(VARCHAR(255), nullable=False)

class reqFriend(Base):
    __tablename__ = "reqFriend"
    
    user_uuid = Column(CHAR(36), nullable=False, primary_key=True)
    send_uuid = Column(CHAR(36), nullable=False, primary_key=True)
    state = Column(Enum('friend', 'send', 'block'), default='send')

class Friend(Base):
    __tablename__ = "friend"

    user_uuid = Column(CHAR(36), nullable=False, primary_key=True)
    send_uuid = Column(CHAR(36), nullable=False, primary_key=True)
    chat_uuid = Column(CHAR(36), nullable=False)

class Server(Base):
    __tablename__ = "server"

    server_name = Column(VARCHAR(10))
    server_uuid = Column(CHAR(36), nullable=False, primary_key=True)
    owner_uuid = Column(CHAR(36), nullable=False)

class Server_User(Base):
    __tablename__ = "server_users"

    server_uuid = Column(CHAR(36), primary_key=True, nullable=False)
    user_uuid = Column(CHAR(36), primary_key=True, nullable=False)


class Server_in_Server(Base):
    __tablename__ = "server_in_channel"

    server_uuid = Column(CHAR(36), primary_key=True, nullable=False)
    channel_id = Column(VARCHAR(20), primary_key=True, nullable=False)
    channel_uuid = Column(CHAR(36), nullable=False)