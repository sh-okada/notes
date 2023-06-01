from abc import ABCMeta, abstractmethod

from app.domain.entity.user import User


class IUserRepository(metaclass=ABCMeta):
    @abstractmethod
    def find_by_id(self, id: str) -> User:
        raise NotImplementedError()

    @abstractmethod
    def exists_by_id(self, id: str) -> bool:
        raise NotImplementedError()

    @abstractmethod
    def create(self, user: User) -> User:
        raise NotImplementedError()
