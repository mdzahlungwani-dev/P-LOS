from fastapi import FastAPI

from .database import engine
from .models import Base
from .routers import users, events, goals

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Personal Adaptive Life OS")


app.include_router(users.router)
app.include_router(events.router)
app.include_router(goals.router)


@app.get("/")
def root():

    return {"message": "Life OS API running"}
