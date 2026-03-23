from pydantic import BaseModel

class MedicineCreate(BaseModel):
    name: str
    dosage: str
    time: str


class FeedbackCreate(BaseModel):
    medicine_id: int
    taken_on_time: int
    delay_minutes: int
    side_effects: int