import {Mission} from "@/app/lib/definitions";

export async function fetchMission(): Promise<Mission> {
    const authRes = await fetch('/api/mission');
    return authRes.json();
}

export async function authenticate(password: string): Promise<Mission> {
    const authRes = await fetch('/api/briefing', {
        method: 'POST',
        body: JSON.stringify({answer: password})
    });
    return authRes.json();
}