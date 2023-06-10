from app.application.dto.response.note_response import NoteResponse
from app.domain.entity.note import Note
from app.infrastructure.db.orm.note import OrmNote
from app.shared.mapper.mapper import IMapper


class NoteMapper(IMapper[Note, OrmNote, NoteResponse]):
    @classmethod
    def orm_to_entity(cls, orm: OrmNote) -> Note:
        return Note(
            id=orm.id,
            title=orm.title,
            body=orm.body,
            created_at=orm.created_at,
        )

    @classmethod
    def entity_to_orm(cls, entity: Note) -> OrmNote:
        return OrmNote(
            id=entity.id,
            title=entity.title,
            body=entity.body,
            created_at=entity.created_at,
        )

    @classmethod
    def entity_to_response(self, entity: Note) -> NoteResponse:
        return NoteResponse(
            id=entity.id,
            title=entity.title,
            body=entity.body,
            created_at=entity.created_at,
        )
