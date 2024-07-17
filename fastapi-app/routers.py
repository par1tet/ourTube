from fastapi import APIRouter, Body
import videoapi.api as apitube

router = APIRouter()

@router.post("/get_videos")
async def add_manga(data = Body()):
    return {"data": apitube.getResponse(data["req"])}
