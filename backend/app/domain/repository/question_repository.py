from abc import ABCMeta, abstractmethod

from app.domain.entity.question import Question


class IQuestionRepository(metaclass=ABCMeta):
    @abstractmethod
    def find_all(self) -> list[Question]:
        raise NotImplementedError()

    @abstractmethod
    def find_by_id(self, id: str) -> Question:
        raise NotImplementedError()

    @abstractmethod
    def create(self, title: str, body: str) -> Question:
        raise NotImplementedError()
