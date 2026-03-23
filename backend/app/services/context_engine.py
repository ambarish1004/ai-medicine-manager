from sqlalchemy.orm import Session
from app import models

def analyze_user_pattern(medicine_id: int, db: Session):
    feedbacks = db.query(models.Feedback).filter(
        models.Feedback.medicine_id == medicine_id
    ).all()

    if len(feedbacks) < 3:
        return "Not enough data for pattern detection"

    delays = [f.delay_minutes for f in feedbacks]

    avg_delay = sum(delays) / len(delays)

    consistency = max(delays) - min(delays)

    # Logic
    if consistency < 10:
        return f"User is consistent. Suggested shift: +{int(avg_delay)} mins"

    elif avg_delay > 20:
        return "User often delays. Suggest later schedule"

    else:
        return "No strong pattern detected"