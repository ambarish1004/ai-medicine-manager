from sqlalchemy.orm import Session
from app.services.scheduler import get_adaptive_time
from app.services.context_engine import analyze_user_pattern
from app.services.risk_model import predict_risk
from app.services.adherence import calculate_adherence
from app import models

def get_missed_count(feedbacks):
    return sum(1 for f in feedbacks if f.taken_on_time == 0)

def get_avg_delay(feedbacks):
    return sum(f.delay_minutes for f in feedbacks) / len(feedbacks)

def get_side_effects(feedbacks):
    return 1 if any(f.side_effects == 1 for f in feedbacks) else 0


def smart_recommendation(medicine_id: int, db: Session):
    feedbacks = db.query(models.Feedback).filter(
        models.Feedback.medicine_id == medicine_id
    ).all()

    if not feedbacks:
        return {"message": "No data available"}

    # Extract features
    missed = get_missed_count(feedbacks)
    avg_delay = get_avg_delay(feedbacks)
    side_effects = get_side_effects(feedbacks)

    # Individual modules
    risk, reason= predict_risk(missed, avg_delay, side_effects)
    pattern = analyze_user_pattern(medicine_id, db)
    adjustment = get_adaptive_time(medicine_id, db)
    
    adherence_score = calculate_adherence(feedbacks)

    # Final decision logic
    if risk == "High Risk":
        final = f"{adjustment} + High Alert ⚠️"

    elif "delay" in pattern.lower():
        final = "Adjust schedule later based on user habit"

    else:
        final = adjustment

    return {
        "risk": risk,
        "risk_reason": reason,
        "adherence_score": adherence_score,
        "pattern": pattern,
        "adjustment": adjustment,
        "final_decision": final
    }