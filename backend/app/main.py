from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.infrastructure.db.mysql import Base, engine
from app.infrastructure.db.orm.question import OrmQuestion
from app.infrastructure.db.orm.user import OrmUser
from app.infrastructure.router.auth_router import auth_router
from app.infrastructure.router.question_router import question_router
from app.infrastructure.router.user_router import user_router
from app.infrastructure.router.password_router import password_router

Base.metadata.create_all(bind=engine, tables=[OrmUser.__table__, OrmQuestion.__table__])

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(user_router)
app.include_router(question_router)
app.include_router(password_router)


@app.get(path="/")
async def index():
    return {"message": "Hello World"}


@app.exception_handler(HTTPException)
async def http_exception_handler(_: Request, exc: HTTPException):
    return JSONResponse(
        status_code=exc.status_code,
        content="http error",
    )