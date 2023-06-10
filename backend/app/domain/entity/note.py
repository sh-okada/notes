from dataclasses import dataclass
from datetime import datetime


@dataclass(eq=True, frozen=True)
class Note:
    id: str
    title: str
    body: str
    created_at: datetime
