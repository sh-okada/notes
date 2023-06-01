from sqlalchemy import Column, String
from sqlalchemy.orm import relationship

from app.infrastructure.db.mysql import Base


class OrmUser(Base):
    __tablename__ = "users"

    id = Column(String(255), primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    password = Column(String(255), nullable=False)

    questions = relationship("OrmQuestion", back_populates="posted_user", cascade="save-update, merge, delete")
