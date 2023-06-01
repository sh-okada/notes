from pydantic import BaseModel


class StrengthRequest(BaseModel):
    password: str
