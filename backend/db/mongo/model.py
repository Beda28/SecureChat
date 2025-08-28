from beanie import Document
from datetime import datetime

class FriendMessage(Document):
    room_uuid: str
    user_id: str
    content: str
    timestamp: datetime

    class Settings:
        name="FriendMessage"