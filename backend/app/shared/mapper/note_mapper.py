from app.application.dto.response.note_response import NoteResponse
from app.domain.entity.note import Note
from app.domain.entity.posted_user import PostedUser
from app.infrastructure.db.orm.schema import OrmNote
from app.shared.mapper.mapper import IMapper


class NoteMapper(IMapper[Note, OrmNote, NoteResponse]):
    @classmethod
    def orm_to_entity(cls, orm: OrmNote) -> Note:
        return Note(
            id=orm.id,
            title=orm.title,
            body=orm.body,
            created_at=orm.created_at,
            posted_user=PostedUser.create(orm.posted_user.id, orm.posted_user.name),
        )

    @classmethod
    def entity_to_orm(cls, entity: Note) -> OrmNote:
        return OrmNote(
            id=entity.id,
            title=entity.title,
            body=entity.body,
            created_at=entity.created_at,
            posted_user_id=entity.posted_user.id,
        )

    @classmethod
    def entity_to_response(self, entity: Note) -> NoteResponse:
        return NoteResponse(
            id=entity.id,
            title=entity.title,
            body=entity.body,
            created_at=entity.created_at,
        )
