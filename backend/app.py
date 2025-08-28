import uvicorn
from fastapi import FastAPI
from routes import user
from controller import websocket
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware
from db.mongo import mongo
from db.redis import redis

redis_client = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    await mongo.init_mongo()
    await redis.init_redis()
    print("애플리케이션 시작: MongoDB 클라이언트 및 DB 인스턴스 준비 완료.")
    yield
    await mongo.close_mongo_connection()
    await redis.close_redis_connection()
    print("애플리케이션 종료: MongoDB 클라이언트 닫힘.")

app = FastAPI(lifespan=lifespan)
app.include_router(user.router)
app.include_router(websocket.router)

origins = [
    "http://localhost",
    "http://localhost:80", 
    "http://localhost:3000", 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=8000)