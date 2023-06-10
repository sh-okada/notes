from datetime import datetime

from sqlalchemy import Column, DateTime, ForeignKey, String, Text
from sqlalchemy.orm import Mapped, relationship

from app.infrastructure.db.mysql import Base


class OrmUser(Base):
    __tablename__ = "users"

    id: Mapped[str] = Column(String(255), primary_key=True, index=True)
    name: Mapped[str] = Column(String(255), nullable=False)
    password: Mapped[str] = Column(String(255), nullable=False)

    notes: Mapped["OrmNote"] = relationship("OrmNote", back_populates="posted_user")


class OrmNote(Base):
    __tablename__ = "notes"

    id: Mapped[str] = Column(String(255), primary_key=True, index=True)
    title: Mapped[str] = Column(String(255), nullable=False)
    body: Mapped[str] = Column(Text(), nullable=False)
    created_at: Mapped[datetime] = Column(DateTime(), nullable=False)
    posted_user_id: Mapped[str] = Column(String(255), ForeignKey("users.id", onupdate="CASCADE", ondelete="CASCADE"))

    posted_user: Mapped["OrmUser"] = relationship("OrmUser", back_populates="notes")
