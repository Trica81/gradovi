
import { AppService } from 'src/app/service/app.service';
import { Injectable } from '@angular/core';
import {  Subject } from 'rxjs';
import { LatinPipe } from 'src/app/filters/latin.pipe';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class StartService {
    listOfCities: string[] = [];
    selectedCity: string[] = [];
    timer = new Subject<number>();
    selectedCities = new Subject<string[]>();
    onFilterdCities = new Subject<string[]>();
    latin = new LatinPipe();

    constructor ( private appService: AppService) {}


    /**
     * @description Load data on start
     */
    dataLoad() {
        return this.appService.onStartData();
    }

    /**
     * @description Filter which will transform text with ČĆ to C etc and compare it to users input search
     *              and return only matched cities
     * @param term: String
     */
    filterCity( term: string ) {
        const filter = this.listOfCities.filter(( item ) => {
            return this.latin.transform(item).toLowerCase().indexOf(this.latin.transform(term).toLowerCase()) !== -1;
        });
        this.onFilterdCities.next(filter);
    }

    /**
     * @description Check if city is already in list of selected cities if not push it to the list
     * @param city: String
     */
    addSelectedCity (city: string) {
        if ( this.selectedCity.length < 4) {
            const toAdd = this.selectedCity.indexOf(city);
            if ( toAdd === -1) {
                this.selectedCity.push(city);
                this.selectedCities.next(this.selectedCity);
            }
        }
    }
    /**
     *  @description Remove city from Selected cities list
     * @param i: Number
     */
    removeSelected(i: number ) {
        this.selectedCity.splice(i, 1);
        this.selectedCities.next(this.selectedCity);
    }

    /**
     * @description Set permission for user to visit result page
     * @param bool: Boolean
     */
    onActive( bool: boolean) {
        this.appService.setActive(bool);
    }

    /**
     * @description Set correct answert
     * @param offerd: string []
     */
    setCorrectCities(offerd: string[]) {
        this.appService.correctAnswers = offerd;
    }

    /**
     * @description set list of selected cities from user
     */
    setSelectedCity() {
        this.appService.selectedCity = this.selectedCity;
    }

    resetGame() {
    this.selectedCity = [];
    this.selectedCities.next(this.selectedCity);
    }

}
