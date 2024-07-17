from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import router
import uvicorn

app = FastAPI()
app.include_router(router=router)

origins = [
    "http://localhost:3000",
    "http://192.168.0.110:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

if __name__ == '__main__':
    uvicorn.run("app:app", port=8000, reload=True)