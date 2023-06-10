from dataclasses import dataclass
from datetime import datetime

import shortuuid

from app.domain.entity.posted_user import PostedUser


@dataclass(eq=True, frozen=True)
class Note:
    id: str
    title: str
    body: str
    created_at: datetime
    posted_user: PostedUser

    @classmethod
    def create(cls, title: str, body: str, posted_user: PostedUser) -> "Note":
        return Note(id=shortuuid.uuid(), title=title, body=body, created_at=datetime.now(), posted_user=posted_user)
