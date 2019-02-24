import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { StartService } from '../start-page.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit, OnDestroy {

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
    this.filterSub = this.startService.onFilterdCities.subscribe((data: string[]) => {
      this.filterCity = data;
    });
  }

  ngOnDestroy(): void {
    this.filterSub.unsubscribe();
  }
}
