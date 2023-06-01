from dataclasses import dataclass
from datetime import datetime

from app.domain.entity.user import User


@dataclass(eq=True, frozen=True)
class Question:
    id: str
    title: str
    body: str
    created_at: datetime
    posted_user: User
