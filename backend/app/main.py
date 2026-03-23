from fastapi import FastAPI
from app.database import engine, Base
from app.routes import medicine, feedback, prediction

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(medicine.router, prefix="/medicine")
app.include_router(feedback.router, prefix="/feedback")
app.include_router(prediction.router, prefix="/predict")

@app.get("/")
def home():
    return {"message": "AI Medicine Manager Running"}