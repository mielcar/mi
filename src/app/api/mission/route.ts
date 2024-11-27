import {Mission} from "@/app/lib/definitions";

export async function GET() {
    const mission: Mission = global.mission ? global.mission : new Mission();
    return Response.json(mission);
}