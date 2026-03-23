from sqlalchemy import Column, Integer, String, Float
from .database import Base

class Medicine(Base):
    __tablename__ = "medicines"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    dosage = Column(String)
    time = Column(String)


class Feedback(Base):
    __tablename__ = "feedback"

    id = Column(Integer, primary_key=True, index=True)
    medicine_id = Column(Integer)
    taken_on_time = Column(Integer)  # 1 or 0
    delay_minutes = Column(Integer)
    side_effects = Column(Integer)  # 1 or 0