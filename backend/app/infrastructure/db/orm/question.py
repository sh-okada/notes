from datetime import datetime

from sqlalchemy import Column, DateTime, ForeignKey, String, Text
from sqlalchemy.orm import relationship

from app.infrastructure.db.mysql import Base


class OrmQuestion(Base):
    __tablename__ = "questions"

    id = Column(String(255), primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    body = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.now(), nullable=False)
    user_id = Column(String(255), ForeignKey("users.id"), nullable=False)

    posted_user = relationship("OrmUser", back_populates="questions")
