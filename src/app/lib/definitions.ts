export type MissionResult = {
    result: string;
    missionState: Mission;
}

export type MissionRequest = {
    answer: string;
}

export class Mission {

    private _missionNo = 0;
    private _isAuthenticated = false;

    authenticate() {
        this._isAuthenticated = true;
        if (this._missionNo < 1) {
            this._missionNo = 1;
        }
    }

    isAuthenticated(): boolean {
        return this._isAuthenticated;
    }

    getMissionNo(): number {
        return this._missionNo;
    }
}