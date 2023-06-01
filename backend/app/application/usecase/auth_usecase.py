from typing import Tuple

from fastapi import Depends

from app.application.dto.request.login_request import LoginRequest
from app.application.dto.response.user_response import UserResponse
from app.domain.repository.user_repository import IUserRepository
from app.infrastructure.repository.user_repository import UserRepository
from app.shared.auth.jwt import Jwt
from app.shared.auth.password import Password
from app.shared.exception.http import unauthorized
from app.shared.mapper.user_mapper import UserMapper


class AuthUseCase:
    def __init__(self, user_repository: IUserRepository = Depends(UserRepository)):
        self.__user_repository = user_repository

    def login(self, login_request: LoginRequest) -> Tuple[str, UserResponse]:
        user = self.__user_repository.find_by_id(login_request.user_id)

        if not Password.verify(login_request.password, user.password):
            raise unauthorized()

        access_token = Jwt.create_access_token(user_id=user.id)

        return (access_token, UserMapper.entity_to_response(user))
