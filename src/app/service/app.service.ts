import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

    private isActive = false;

    private _correctAnswers: string[];
    private _selectedCity: string[] = [];

    public get correctAnswers(): string[] {
        return this._correctAnswers;
    }

    public set correctAnswers(value: string[]) {
        this._correctAnswers = value;
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
