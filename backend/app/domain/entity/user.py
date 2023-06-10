from dataclasses import dataclass

from app.domain.entity.note import Note
from app.domain.entity.posted_user import PostedUser
from app.shared.auth.password import Password


@dataclass(eq=True, frozen=True)
class User:
    id: str
    name: str
    password: str
    notes: list[Note]

    @classmethod
    def sign_up(cls, id: str, name: str, password: str) -> "User":
        return User(id=id, name=name, password=Password.hashed(password), notes=[])

    def add_note(self, title: str, body: str) -> Note:
        note = Note.create(title, body, PostedUser.create(self.id, self.name))
        self.notes.append(note)

        return note
