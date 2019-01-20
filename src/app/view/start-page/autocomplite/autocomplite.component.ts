import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { StartService } from '../start-page.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-autocomplite',
  templateUrl: './autocomplite.component.html',
  styleUrls: ['./autocomplite.component.css']
})
export class AutocompliteComponent implements OnInit, OnDestroy {

  filterCity: string[] = [];
  searchCity: string;
  private filterSub: Subscription;
  showDropDown = false;
  constructor( private startService: StartService) { }

  search() {
    this.showDropDown = true;
    this.startService.filterCity(this.searchCity);
  }

  clearSearch( ) {
    this.searchCity = '';
    this.filterCity = [];
    this.showDropDown = false;
  }

  selectCity (city: string) {
    this.startService.addSelectedCity(city);
    this.clearSearch();
  }

  ngOnInit() {
    this.filterSub = this.startService.onFilterdCitys.subscribe((data: string[]) => {
      this.filterCity = data;
    });
  }

  ngOnDestroy(): void {
    this.filterSub.unsubscribe();
  }
}
