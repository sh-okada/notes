from datetime import datetime
from typing import Tuple
from fastapi import Depends
import shortuuid
from app.application.dto.request.post_request import PostRequest

from app.application.dto.request.sign_up_request import SignUpRequest
from app.application.dto.response import note_response
from app.application.dto.response.user_response import UserResponse
from app.domain.entity.note import Note
from app.domain.entity.user import User
from app.domain.repository.note_repository import INoteRepository
from app.domain.repository.user_repository import IUserRepository
from app.infrastructure.repository.note_repository import NoteRepository
from app.infrastructure.repository.user_repository import UserRepository
from app.shared.auth.jwt import Jwt
from app.shared.auth.password import Password
from app.shared.mapper.note_mapper import NoteMapper
from app.shared.mapper.user_mapper import UserMapper


class UserUseCase:
    def __init__(
        self,
        user_repository: IUserRepository = Depends(UserRepository),
        note_repository: INoteRepository = Depends(NoteRepository),
    ):
        self.__user_repository = user_repository
        self.__note_repository = note_repository

    def sign_up(self, sign_up_request: SignUpRequest) -> Tuple[str, UserResponse]:
        user = User(
            id=sign_up_request.id, name=sign_up_request.name, password=Password.hashed(sign_up_request.password)
        )

        access_token = Jwt.create_access_token(user_id=user.id)

        return (access_token, UserMapper.entity_to_response(self.__user_repository.create(user)))

    def post_note(self, user_id: str, post_request: PostRequest) -> note_response:
        note = Note(shortuuid.uuid(), post_request.title, post_request.body, datetime.now())

        return NoteMapper.entity_to_response(self.__note_repository.create(user_id, note))
