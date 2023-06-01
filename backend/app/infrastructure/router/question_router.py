from fastapi import APIRouter, Depends

from app.application.dto.request.post_request import PostRequest
from app.application.dto.response.question_response import QuestionResponse
from app.application.usecase.question_usecase import QuestionUseCase

question_router = APIRouter(prefix="/questions")


@question_router.get("")
async def get_questions(question_usecase: QuestionUseCase = Depends()) -> list[QuestionResponse]:
    return question_usecase.fetch_questions()


@question_router.get("/{id}")
async def get_question(id: str, question_usecase: QuestionUseCase = Depends()) -> QuestionResponse:
    return question_usecase.fetch_question(id)


@question_router.post("")
async def post_question(post_request: PostRequest, question_usecase: QuestionUseCase = Depends()) -> QuestionResponse:
    return question_usecase.post(post_request)
