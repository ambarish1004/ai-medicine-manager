from sqlalchemy.orm import Session
from app import models

def get_adaptive_time(medicine_id: int, db: Session):
    feedbacks = db.query(models.Feedback).filter(
        models.Feedback.medicine_id == medicine_id
    ).all()

    if not feedbacks:
        return "No Data"

    total_delay = 0
    count = 0
    missed = 0

    for f in feedbacks:
        total_delay += f.delay_minutes
        count += 1
        if f.taken_on_time == 0:
            missed += 1

    avg_delay = total_delay / count

    if missed >= 2:
        return f"High Alert ⚠️ (Missed {missed} times)"

    if avg_delay > 15:
        return f"Shift time by +{int(avg_delay)} minutes"

    elif avg_delay < -5:
        return f"Shift time earlier by {int(abs(avg_delay))} minutes"

    else:
        return "No Change Needed"