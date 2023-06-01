from app.application.dto.response.question_response import QuestionResponse
from app.domain.entity.question import Question
from app.infrastructure.db.orm.question import OrmQuestion
from app.shared.mapper.mapper import IMapper
from app.shared.mapper.user_mapper import UserMapper


class QuestionMapper(IMapper[Question, OrmQuestion, QuestionResponse]):
    @classmethod
    def orm_to_entity(cls, orm: OrmQuestion) -> Question:
        return Question(
            id=orm.id,
            title=orm.title,
            body=orm.body,
            created_at=orm.created_at,
            posted_user=UserMapper.orm_to_entity(orm.posted_user),
        )

    @classmethod
    def entity_to_orm(cls, entity: Question) -> OrmQuestion:
        return OrmQuestion(
            id=entity.id,
            title=entity.title,
            body=entity.body,
            created_at=entity.created_at,
            user_id=entity.posted_user.id,
        )

    @classmethod
    def entity_to_response(self, entity: Question) -> QuestionResponse:
        return QuestionResponse(
            id=entity.id,
            title=entity.title,
            body=entity.body,
            created_at=entity.created_at,
            posted_user=UserMapper.entity_to_response(entity.posted_user),
        )
