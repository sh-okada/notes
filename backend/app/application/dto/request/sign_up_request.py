from pydantic import BaseModel, Field, validator

from app.shared.auth.password import Password


class SignUpRequest(BaseModel):
    id: str = Field(min_length=3, max_length=12)
    name: str = Field(min_length=3, max_length=20)
    password: str = Field(min_length=8, max_length=100)

    @validator("password")
    def validate_password_policy(cls, v: str):
        if Password.check_policy(v).strength not in ["strong", "medium"]:
            raise ValueError("violate password policy")

        return v
