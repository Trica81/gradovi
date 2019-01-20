
import { AppService } from 'src/app/service/app.service';
import { Injectable } from '@angular/core';
import { GameData } from 'src/app/interface/gameData';
import { Observable, of, Subject } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class StartService {
    ponudjeni: string[] = [];
    selektovani: string[] = [];
    timer = new Subject<number>();
    selectedCitys = new Subject<string[]>();
    onFilterdCitys = new Subject<string[]>();

    constructor ( private appService: AppService) {}


    dataLoad() {
        return this.appService.onStartData();
    }

    filterCity( term: string ) {
        const filter = this.ponudjeni.filter(( item ) => {
                return item.toLowerCase().indexOf(term.toLowerCase()) !== -1;
            });
        this.onFilterdCitys.next(filter);
    }

    addSelectedCity (city: string) {
        if ( this.selektovani.length < 4) {
            const toAdd = this.selektovani.indexOf(city);
            if ( toAdd === -1) {
                this.selektovani.push(city);
                this.selectedCitys.next(this.selektovani);
            }
        }
    }

    onActive( bool: boolean) {
        this.appService.setActive(bool);
    }

    removeSelected(i: number ) {
        this.selektovani.splice(i, 1);
        this.selectedCitys.next(this.selektovani);
    }

    setCorrectCitys(offerd: string[]) {
        this.appService.tacno = offerd;
    }

    setSelectedCity() {
        this.appService.selectedCity = this.selektovani;
    }
     resetGame() {
        this.selektovani = [];
        this.selectedCitys.next(this.selektovani);
     }

}
