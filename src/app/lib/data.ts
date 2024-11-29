import {MissionResponse} from "@/app/lib/definitions";
import {Mission} from "@/app/mission";

export async function fetchMission(): Promise<Mission> {
    const res = await fetch('/api/mission', {cache: 'no-store'});
    return mapMissionResponse(res.json());
}

export async function authenticate(password: string): Promise<Mission> {
    const authRes = await fetch('/api/briefing', {
        method: 'POST',
        body: JSON.stringify({answer: password})
    });
    return mapMissionResponse(authRes.json());
}

export async function checkMission1(key: string): Promise<Mission> {
    const authRes = await fetch('/api/mission1', {
        method: 'POST',
        body: JSON.stringify({answer: key})
    });
    return mapMissionResponse(authRes.json());
}

export async function checkMission2(key: string): Promise<Mission> {
    const authRes = await fetch('/api/mission2', {
        method: 'POST',
        body: JSON.stringify({answer: key})
    });
    return mapMissionResponse(authRes.json());
}

export function getMission(): Mission {
    if (global.mission)
        return global.mission;
    global.mission = new Mission();
    return global.mission;
}

export function setMission(mission: Mission) {
    global.mission = mission;
}

function mapMissionResponse(promise: Promise<MissionResponse>): Promise<Mission> {
    return promise.then(mission => Mission.init(mission));
}