import { Component, OnInit, OnDestroy } from '@angular/core';
import { StartService } from '../start-page.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-cities',
  templateUrl: './selected-cities.component.html',
  styleUrls: ['./selected-cities.component.css']
})
export class SelectedCitiesComponent implements OnInit, OnDestroy {
  title: String = 'Gradovi';
  selectedCities: string[] = [];
  private subscription: Subscription;

  constructor(private startService: StartService, private router: Router) { }

  removeCity(i: number) {
    this.startService.removeSelected(i);
  }

  submit() {
    this.startService.setSelectedCity();
    this.startService.onActive(true);
    this.router.navigate(['resault']);
  }

  ngOnInit( ) {
    this.subscription = this.startService.selectedCities.subscribe((data) => {
      this.selectedCities = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
