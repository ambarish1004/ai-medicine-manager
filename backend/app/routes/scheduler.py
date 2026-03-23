from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.services.scheduler import get_adaptive_time

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/adjust/{medicine_id}")
def adjust_time(medicine_id: int, db: Session = Depends(get_db)):
    result = get_adaptive_time(medicine_id, db)
    return {"adjustment": result}