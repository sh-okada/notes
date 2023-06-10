from app.application.dto.response.user_response import UserResponse
from app.domain.entity.user import User
from app.infrastructure.db.orm.schema import OrmUser
from app.shared.mapper.mapper import IMapper


class UserMapper(IMapper[User, OrmUser, UserResponse]):
    @classmethod
    def orm_to_entity(cls, orm: OrmUser) -> User:
        return User(id=orm.id, name=orm.name, password=orm.password)

    @classmethod
    def entity_to_orm(cls, entity: User) -> OrmUser:
        return OrmUser(id=entity.id, name=entity.name, password=entity.password)

    @classmethod
    def entity_to_response(self, entity: User) -> UserResponse:
        return UserResponse(id=entity.id, name=entity.name)
