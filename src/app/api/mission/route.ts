import {getMission} from "@/app/lib/data";

export async function GET() {
    const mission = getMission();
    return Response.json(mission.toResponse());
}