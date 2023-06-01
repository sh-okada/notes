from fastapi import APIRouter, Depends, Response, status
from fastapi.responses import JSONResponse

from app.application.dto.request.login_request import LoginRequest
from app.application.usecase.auth_usecase import AuthUseCase
from app.shared.auth.jwt import Jwt, Payload
from fastapi.encoders import jsonable_encoder


auth_router = APIRouter(prefix="/auth")


@auth_router.post("/login")
async def login(
    login_request: LoginRequest,
    auth_usecase: AuthUseCase = Depends(),
) -> JSONResponse:
    access_token, user = auth_usecase.login(login_request)

    response = JSONResponse(status_code=status.HTTP_200_OK, content=jsonable_encoder(vars(user)))
    response.set_cookie(key=Jwt.COOKIE_KEY, value=access_token, httponly=True, max_age=60 * 30, secure=True)

    return response


@auth_router.get("/logout")
async def logout() -> Response:
    response = Response(status_code=status.HTTP_200_OK)
    response.set_cookie(key=Jwt.COOKIE_KEY, httponly=True, max_age=0, secure=True)

    return response


@auth_router.get("/validation")
async def validation(_: Payload = Depends(Jwt.get_payload)) -> Response:
    return Response(status_code=status.HTTP_200_OK)
