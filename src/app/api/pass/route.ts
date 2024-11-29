import {getMission, setMission} from "@/app/lib/data";

export async function GET() {
    const mission = getMission();
    mission.passMission(3);
    setMission(mission);
}