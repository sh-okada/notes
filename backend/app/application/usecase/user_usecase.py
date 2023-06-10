from typing import Tuple

from fastapi import Depends

from app.application.dto.request.sign_up_request import SignUpRequest
from app.application.dto.response.user_response import UserResponse
from app.domain.entity.user import User
from app.domain.repository.user_repository import IUserRepository
from app.infrastructure.repository.user_repository import UserRepository
from app.shared.auth.jwt import Jwt
from app.shared.mapper.user_mapper import UserMapper


class UserUseCase:
    def __init__(self, user_repository: IUserRepository = Depends(UserRepository)):
        self.__user_repository = user_repository

    def sign_up(self, sign_up_request: SignUpRequest) -> Tuple[str, UserResponse]:
        user = User.sign_up(sign_up_request.id, sign_up_request.name, sign_up_request.password)

        access_token = Jwt.create_access_token(user_id=user.id)

        return (access_token, UserMapper.entity_to_response(self.__user_repository.create(user)))
