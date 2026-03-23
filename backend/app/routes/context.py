from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.services.context_engine import analyze_user_pattern

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/pattern/{medicine_id}")
def get_pattern(medicine_id: int, db: Session = Depends(get_db)):
    result = analyze_user_pattern(medicine_id, db)
    return {"pattern": result}