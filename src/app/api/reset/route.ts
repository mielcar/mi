import {Mission} from "@/app/lib/definitions";

export async function GET() {
    global.mission = new Mission()
}