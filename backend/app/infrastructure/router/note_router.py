from fastapi import APIRouter, Depends

from app.application.dto.request.post_request import PostRequest
from app.application.dto.response.note_response import NoteResponse
from app.application.usecase.note_usecase import NoteUseCase
from app.shared.auth.jwt import Jwt, Payload

note_router = APIRouter(prefix="/notes")


@note_router.post("")
async def post_note(
    post_request: PostRequest, payload: Payload = Depends(Jwt.get_payload), note_usecase: NoteUseCase = Depends()
) -> NoteResponse:
    return note_usecase.post(payload.sub, post_request)
