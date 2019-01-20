import { Component, OnInit, OnDestroy } from '@angular/core';
import { StartService } from '../start-page.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selected-citys',
  templateUrl: './selected-citys.component.html',
  styleUrls: ['./selected-citys.component.css']
})
export class SelectedCitysComponent implements OnInit, OnDestroy {

  selectedCity: string[] = [];
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
    this.subscription = this.startService.selectedCitys.subscribe((data) => {
      this.selectedCity = data;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
