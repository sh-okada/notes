from sqlalchemy import Column, DateTime, ForeignKey, String, Text

from app.infrastructure.db.mysql import Base


class OrmNote(Base):
    __tablename__ = "notes"

    id = Column(String(255), primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    body = Column(Text(), nullable=False)
    created_at = Column(DateTime(), nullable=False)
    user_id = Column(String(255), ForeignKey("users.id", onupdate="CASCADE", ondelete="CASCADE"))
