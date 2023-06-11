from abc import ABCMeta, abstractmethod

from app.domain.entity.note import Note


class INoteRepository(metaclass=ABCMeta):
    @abstractmethod
    def find_by_id(self, id: str) -> Note:
        raise NotImplementedError()

    @abstractmethod
    def find_by_posted_user_id(self, posted_user_id: str) -> list[Note]:
        raise NotImplementedError()

    @abstractmethod
    def create(self, note: Note) -> Note:
        raise NotImplementedError()
