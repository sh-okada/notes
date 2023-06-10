from fastapi import APIRouter, Depends, status
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

from app.application.dto.request.sign_up_request import SignUpRequest
from app.application.dto.response.user_response import UserResponse
from app.application.usecase.user_usecase import UserUseCase
from app.shared.auth.jwt import Jwt

user_router = APIRouter(prefix="/users")


@user_router.post("")
async def post_user(sign_up_request: SignUpRequest, user_usecase: UserUseCase = Depends()) -> UserResponse:
    access_token, user = user_usecase.sign_up(sign_up_request)

    response = JSONResponse(status_code=status.HTTP_201_CREATED, content=jsonable_encoder(vars(user)))
    response.set_cookie(key=Jwt.COOKIE_KEY, value=access_token, httponly=True, max_age=60 * 30, secure=True)

    return response
