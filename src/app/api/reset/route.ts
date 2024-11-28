import {Mission} from "@/app/mission";

export async function GET() {
    global.mission = new Mission();
}