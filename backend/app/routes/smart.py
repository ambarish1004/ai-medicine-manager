from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.services.smart_engine import smart_recommendation

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/recommendation/{medicine_id}")
def get_recommendation(medicine_id: int, db: Session = Depends(get_db)):
    result = smart_recommendation(medicine_id, db)
    return result