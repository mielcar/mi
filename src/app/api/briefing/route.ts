import {MissionRequest, Mission} from "@/app/lib/definitions";

export async function POST(request: Request) {
    const mr: MissionRequest = await request.json();
    global.mission = global.mission ? global.mission : new Mission();
    if (mr.answer === 'kondor'){
        global.mission.authenticate();
    }
    return Response.json(global.mission)
}