from fastapi import APIRouter

from app.application.dto.request.strength_request import StrengthRequest
from app.application.dto.response.strength_response import StrengthResponse
from app.shared.auth.password import Password

password_router = APIRouter(prefix="/password")


@password_router.post("/strength")
async def strength(
    strength_request: StrengthRequest,
) -> StrengthResponse:
    return StrengthResponse(strength=Password.check_policy(strength_request.password).strength)
