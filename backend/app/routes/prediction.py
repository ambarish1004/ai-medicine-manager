from fastapi import APIRouter
from app.services.risk_model import predict_risk

router = APIRouter()

@router.get("/risk")
def get_risk(missed: int, delay: int, side_effects: int):
    risk = predict_risk(missed, delay, side_effects)
    return {"risk": risk}