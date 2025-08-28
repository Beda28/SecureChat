from jose import jwt
from datetime import datetime, timedelta

KEY = "3b7f16f0d9b4c8a1e2f3d4c5a6b7e8f9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5"
AL = "HS256"

async def getToken(id: str, uuid: str):
    exp = datetime.utcnow() + timedelta(minutes=15)
    payload = {
        "uuid" : str(uuid),
        "id" : id,
        "exp" : exp
    }
    token = jwt.encode(payload, KEY, AL)
    return token