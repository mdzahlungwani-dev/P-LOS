import uuid
from sqlalchemy import Column, String, Float, JSON
from sqlalchemy.dialects.postgresql import UUID

from .database import Base


class User(Base):

    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String, unique=True)


class Event(Base):

    __tablename__ = "events"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)

    user_id = Column(UUID(as_uuid=True))

    event_type = Column(String)

    metadata = Column(JSON)

    emotional_weight = Column(Float)


class Goal(Base):

    __tablename__ = "goals"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)

    user_id = Column(UUID(as_uuid=True))

    title = Column(String)

    description = Column(String)

    priority = Column(Float)

    status = Column(String)
