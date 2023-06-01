from pydantic import BaseModel, Field


class PostRequest(BaseModel):
    title: str = Field(min_length=5, max_length=50)
    body: str
