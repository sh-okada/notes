from dataclasses import dataclass
from datetime import datetime

from app.application.dto.response.user_response import UserResponse


@dataclass(eq=True, frozen=True)
class QuestionResponse:
    id: str
    title: str
    body: str
    created_at: datetime
    posted_user: UserResponse
