from abc import ABCMeta, abstractmethod
from app.domain.entity.note import Note


class INoteRepository(metaclass=ABCMeta):
    @abstractmethod
    def find_by_id(self, id: str) -> Note:
        raise NotImplementedError()

    @abstractmethod
    def create(self, user_id: str, note: Note) -> Note:
        raise NotImplementedError()
