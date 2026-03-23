from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from app.database import engine, Base
from app.routes import medicine, feedback, prediction, scheduler, context, smart

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all (for development)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(medicine.router, prefix="/medicine")
app.include_router(feedback.router, prefix="/feedback")
app.include_router(prediction.router, prefix="/predict")
app.include_router(scheduler.router, prefix="/schedule")
app.include_router(context.router, prefix="/context")
app.include_router(smart.router, prefix="/smart")

@app.get("/")
def home():
    return {"message": "AI Medicine Manager Running"}