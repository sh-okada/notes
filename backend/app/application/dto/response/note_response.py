from dataclasses import dataclass
from datetime import datetime


@dataclass(eq=True, frozen=True)
class NoteResponse:
    id: str
    title: str
    body: str
    created_at: datetime
