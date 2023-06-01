from datetime import datetime, timedelta
from typing import Union

from fastapi import Cookie
from jose import jwt

from app.shared.exception.http import unauthorized


class Payload:
    def __init__(self, sub: str, exp: datetime):
        self.sub = sub
        self.exp = exp


class Jwt:
    SECRET: str = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    COOKIE_KEY = "access_token"

    @classmethod
    def create_access_token(cls, user_id: str) -> str:
        payload = Payload(sub=user_id, exp=datetime.utcnow() + timedelta(minutes=cls.ACCESS_TOKEN_EXPIRE_MINUTES))
        access_token = jwt.encode(vars(payload), cls.SECRET, algorithm=cls.ALGORITHM)

        return access_token

    @classmethod
    async def get_payload(cls, access_token: Union[str, None] = Cookie(default=None)) -> Payload:
        try:
            payload = jwt.decode(access_token, cls.SECRET, algorithms=cls.ALGORITHM)
            return Payload(**payload)
        except Exception:
            raise unauthorized()
