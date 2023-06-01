from fastapi import Depends
from sqlalchemy.orm import Session

from app.domain.entity.user import User
from app.domain.repository.user_repository import IUserRepository
from app.infrastructure.db.mysql import get_db
from app.infrastructure.db.orm.user import OrmUser
from app.shared.exception.http import bad_request, not_found
from app.shared.mapper.user_mapper import UserMapper


class UserRepository(IUserRepository):
    def __init__(self, db: Session = Depends(get_db)):
        self.__db = db

    def find_by_id(self, id: str) -> User:
        user = self.__db.query(OrmUser).filter(OrmUser.id == id).first()

        if user is None:
            raise not_found()

        return UserMapper.orm_to_entity(user)

    def exists_by_id(self, id: str) -> bool:
        user = self.__db.query(OrmUser).filter(OrmUser.id == id).first()

        return user is not None

    def create(self, user: User) -> User:
        if self.exists_by_id(user.id):
            raise bad_request()

        orm_user = UserMapper.entity_to_orm(user)

        self.__db.add(orm_user)
        self.__db.commit()
        self.__db.refresh(orm_user)

        return user
