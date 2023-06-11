from fastapi import Depends

from app.application.dto.request.post_request import PostRequest
from app.application.dto.response.note_response import NoteResponse
from app.domain.repository.note_repository import INoteRepository
from app.domain.repository.user_repository import IUserRepository
from app.infrastructure.repository.note_repository import NoteRepository
from app.infrastructure.repository.user_repository import UserRepository
from app.shared.mapper.note_mapper import NoteMapper


class NoteUseCase:
    def __init__(
        self,
        user_repository: IUserRepository = Depends(UserRepository),
        note_repository: INoteRepository = Depends(NoteRepository),
    ):
        self.__user_repository = user_repository
        self.__note_repository = note_repository

    def fetch_notes(self, user_id: str) -> list[NoteResponse]:
        notes = self.__note_repository.find_by_posted_user_id(user_id)

        return list(map(lambda note: NoteMapper.entity_to_response(note), notes))

    def fetch_note(self, id: str) -> NoteResponse:
        return NoteMapper.entity_to_response(self.__note_repository.find_by_id(id))

    def post(self, user_id: str, post_request: PostRequest) -> NoteResponse:
        user = self.__user_repository.find_by_id(user_id)
        note = user.add_note(post_request.title, post_request.body)

        return NoteMapper.entity_to_response(self.__note_repository.create(note))
