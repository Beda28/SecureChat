from beanie import init_beanie
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from typing import Optional
from db.mongo import model

MONGO_URL = "mongodb://admin:adm!nro0t@DB-Mongo:27017/SecureChat?authSource=admin"
DB_NAME = "SecureChat"

_mongo_client: Optional[AsyncIOMotorClient] = None
_mongo_db_instance: Optional[AsyncIOMotorDatabase] = None

async def init_mongo():
    global _mongo_client, _mongo_db_instance

    try:
        _mongo_client = AsyncIOMotorClient(
            MONGO_URL,
            serverSelectionTimeoutMS=5000
        )
        
        _mongo_db_instance = _mongo_client[DB_NAME] 


        await init_beanie(
            database=_mongo_client[DB_NAME],
            document_models=[model.FriendMessage]
        )

        print(f"MongoDB & Beanie 초기화 완료. DB: {DB_NAME}")

    except Exception as e:
        print(f"MongoDB 초기화 실패: {e}")
        _mongo_client = None
        raise

async def close_mongo_connection():
    global _mongo_client, _mongo_db_instance
    if _mongo_client:
        _mongo_client.close()
        _mongo_client = None
        _mongo_db_instance = None
        print("MongoDB 클라이언트 종료됨.")
