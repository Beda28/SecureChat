from fastapi import APIRouter, WebSocket, WebSocketDisconnect
import json
from datetime import datetime
from db.mongo import model
from typing import Dict, List

router = APIRouter()

active_connections: Dict[str, List[WebSocket]] = {}

@router.websocket("/ws/chat/{uuid}")
async def websocket_endpoint(websocket: WebSocket, uuid: str):
    await websocket.accept()

    if uuid not in active_connections:
        active_connections[uuid] = []

    active_connections[uuid].append(websocket)

    try:
        while True:
            data = await websocket.receive_text()
            message_data = json.loads(data)
            
            date = datetime.now()

            message_to_save = model.FriendMessage(
                room_uuid=uuid,
                user_id=message_data.get("user_id"),
                content=message_data.get("content"),
                timestamp=date.strftime('%Y-%m-%d %H:%M')
            )

            inserted_message = await message_to_save.insert()

            message_to_send = {
                "id": str(inserted_message.id),
                "uuid": uuid,
                "user_id": inserted_message.user_id,
                "content": inserted_message.content,
                "timestamp": inserted_message.timestamp.isoformat()
            }

            for connection in active_connections.get(uuid, []):
                await connection.send_text(json.dumps(message_to_send))

    except WebSocketDisconnect:
        del active_connections[uuid]

    except Exception as e:
        print(f"An error occurred: {e}")
        if uuid in active_connections:
            del active_connections[uuid]