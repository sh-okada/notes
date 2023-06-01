from abc import ABCMeta, abstractmethod
from typing import Generic, TypeVar

T1 = TypeVar("T1")
T2 = TypeVar("T2")
T3 = TypeVar("T3")


class IMapper(Generic[T1, T2, T3], metaclass=ABCMeta):
    @abstractmethod
    def orm_to_entity(self, orm: T2) -> T1:
        raise NotImplementedError()

    @abstractmethod
    def entity_to_orm(self, entity: T1) -> T2:
        raise NotImplementedError()

    @abstractmethod
    def entity_to_response(self, entity: T1) -> T3:
        raise NotImplementedError()
