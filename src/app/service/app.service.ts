import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class AppService {
    private isActive = false;

    private _tacno: string[];
    private _selectedCity: string[] = [];

    public get tacno(): string[] {
        return this._tacno;
    }

    public set tacno(value: string[]) {
        this._tacno = value;
    }

    public get selectedCity(): string[] {
        return this._selectedCity;
    }

    public set selectedCity(value: string[]) {
        this._selectedCity = value;
    }

    url = './assets/podaci.json';

    constructor (private http: HttpClient) { }
    onStartData() {
        return this.http.get(this.url);
    }

    getIsActive () {
        return this.isActive;
    }

    setActive(bool: boolean) {
        this.isActive = bool;
    }

}
