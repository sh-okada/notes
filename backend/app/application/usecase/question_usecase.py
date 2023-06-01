from fastapi import Depends

from app.application.dto.request.post_request import PostRequest
from app.application.dto.response.question_response import QuestionResponse
from app.domain.repository.question_repository import IQuestionRepository
from app.infrastructure.repository.question_repository import \
    QuestionRepository
from app.shared.mapper.question_mapper import QuestionMapper


class QuestionUseCase:
    def __init__(self, question_repository: IQuestionRepository = Depends(QuestionRepository)):
        self.__question_repository = question_repository

    def fetch_questions(self) -> list[QuestionResponse]:
        questions = self.__question_repository.find_all()

        return list(map(lambda question: QuestionMapper.entity_to_response(question), questions))

    def fetch_question(self, id: str) -> QuestionResponse:
        question = self.__question_repository.find_by_id(id)

        return QuestionMapper.entity_to_response(question)

    def post(self, post_request: PostRequest) -> QuestionResponse:
        question = self.__question_repository.create(post_request.title, post_request.body, "sh-okada")

        return QuestionMapper.entity_to_response(question)
