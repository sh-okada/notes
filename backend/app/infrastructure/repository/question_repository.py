import shortuuid
from fastapi import Depends
from sqlalchemy import desc
from sqlalchemy.orm import Session

from app.domain.entity.question import Question
from app.domain.repository.question_repository import IQuestionRepository
from app.infrastructure.db.mysql import get_db
from app.infrastructure.db.orm.question import OrmQuestion
from app.shared.exception.http import not_found
from app.shared.mapper.question_mapper import QuestionMapper


class QuestionRepository(IQuestionRepository):
    def __init__(self, db: Session = Depends(get_db)):
        self.__db = db

    def find_all(self) -> list[Question]:
        questions = self.__db.query(OrmQuestion).order_by(desc(OrmQuestion.created_at)).all()

        return list(map(lambda question: QuestionMapper.orm_to_entity(question), questions))

    def find_by_id(self, id: str) -> Question:
        question = self.__db.query(OrmQuestion).filter(OrmQuestion.id == id).first()

        if question is None:
            raise not_found()

        return QuestionMapper.orm_to_entity(question)

    def create(self, title: str, body: str, user_id: str) -> Question:
        question = OrmQuestion(id=shortuuid.uuid(), title=title, body=body, user_id=user_id)

        self.__db.add(question)
        self.__db.commit()
        self.__db.refresh(question)

        return QuestionMapper.orm_to_entity(question)
