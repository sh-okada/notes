from dataclasses import dataclass

from app.domain.entity.note import Note
from app.domain.entity.posted_user import PostedUser


@dataclass(eq=True, frozen=True)
class User:
    id: str
    name: str
    password: str
    notes: list[Note]

    def add_note(self, title: str, body: str) -> Note:
        note = Note.create(title, body, PostedUser.create(self.id, self.name))
        self.notes.append(note)

        return note
