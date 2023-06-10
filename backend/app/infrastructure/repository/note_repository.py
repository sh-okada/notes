from fastapi import Depends
from sqlalchemy.orm import Session

from app.domain.entity.note import Note
from app.domain.entity.user import User
from app.domain.repository.note_repository import INoteRepository
from app.infrastructure.db.mysql import get_db
from app.infrastructure.db.orm.schema import OrmUser
from app.shared.exception.http import not_found
from app.shared.mapper.note_mapper import NoteMapper
from app.shared.mapper.user_mapper import UserMapper


class NoteRepository(INoteRepository):
    def __init__(self, db: Session = Depends(get_db)):
        self.__db = db

    def find_by_id(self, id: str) -> User:
        user = self.__db.query(OrmUser).filter(OrmUser.id == id).first()

        if user is None:
            raise not_found()

        return UserMapper.orm_to_entity(user)

    def create(self, note: Note) -> Note:
        orm_note = NoteMapper.entity_to_orm(note)

        self.__db.add(orm_note)
        self.__db.commit()
        self.__db.refresh(orm_note)

        return note
