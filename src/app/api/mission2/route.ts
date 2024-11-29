import {MissionRequest} from "@/app/lib/definitions";
import {getMission, setMission} from "@/app/lib/data";

export async function POST(request: Request) {
    const mr: MissionRequest = await request.json();
    const mission = getMission();
    if (mr.answer.toLowerCase() === 'dumtek') {
        mission.passMission(2);
    }
    setMission(mission);
    return Response.json(mission.toResponse());
}