import {MissionResponse} from "@/app/lib/definitions";

export class Mission {
    private _missionNo = 0;
    private _isAuthenticated = false;

    static init(response: MissionResponse): Mission {
        const copy: Mission = new Mission();
        copy._missionNo = response.missionNo;
        copy._isAuthenticated = response.isAuthenticated;
        return copy;
    }

    authenticate() {
        this._isAuthenticated = true;
        if (this._missionNo < 1) {
            this._missionNo = 1;
        }
    }

    passMission(missionNo: number) {
        if (this._isAuthenticated && this._missionNo === missionNo) {
            this._missionNo++;
        }
    }

    isAllowed(missionNo: number): boolean {
        return this._missionNo >= missionNo;
    }

    get isAuthenticated(): boolean {
        return this._isAuthenticated;
    }

    toResponse(): MissionResponse {
        return {missionNo: this._missionNo, isAuthenticated: this._isAuthenticated};
    }
}