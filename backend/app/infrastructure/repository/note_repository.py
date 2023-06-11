from fastapi import Depends
from sqlalchemy import desc
from sqlalchemy.orm import Session

from app.domain.entity.note import Note
from app.domain.repository.note_repository import INoteRepository
from app.infrastructure.db.mysql import get_db
from app.infrastructure.db.orm.schema import OrmNote
from app.shared.exception.http import not_found
from app.shared.mapper.note_mapper import NoteMapper


class NoteRepository(INoteRepository):
    def __init__(self, db: Session = Depends(get_db)):
        self.__db = db

    def find_by_id(self, id: str) -> Note:
        orm_note = self.__db.query(OrmNote).filter(OrmNote.id == id).first()

        if orm_note is None:
            raise not_found()

        return NoteMapper.orm_to_entity(orm_note)

    def find_by_posted_user_id(self, posted_user_id: str) -> list[Note]:
        orm_notes = self.__db.query(OrmNote).order_by(desc(OrmNote.created_at)).all()

        return list(map(lambda note: NoteMapper.orm_to_entity(note), orm_notes))

    def create(self, note: Note) -> Note:
        orm_note = NoteMapper.entity_to_orm(note)

        self.__db.add(orm_note)
        self.__db.commit()
        self.__db.refresh(orm_note)

        return note
