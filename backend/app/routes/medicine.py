from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app import models, schemas

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/add")
def add_medicine(medicine: schemas.MedicineCreate, db: Session = Depends(get_db)):
    new_med = models.Medicine(**medicine.dict())
    db.add(new_med)
    db.commit()
    return {"message": "Medicine added"}