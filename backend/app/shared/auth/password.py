from passlib.context import CryptContext
from safe import check, Strength


class Password:
    CRYPT_CONTEXT = CryptContext(schemes=["bcrypt"], deprecated="auto")

    @classmethod
    def verify(cls, plain_password: str, hashed_password: str) -> bool:
        return cls.CRYPT_CONTEXT.verify(plain_password, hashed_password)

    @classmethod
    def hashed(cls, password: str) -> str:
        return cls.CRYPT_CONTEXT.hash(password)

    @classmethod
    def check_policy(cls, password: str) -> Strength:
        return check(password)
