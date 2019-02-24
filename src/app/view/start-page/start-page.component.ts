import { Component, OnInit, OnDestroy } from '@angular/core';
import { StartService } from './start-page.service';
import { GameData } from 'src/app/interface/gameData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit, OnDestroy {
    region: string;
    ponudjene: string[] = [];
    gameTime: number;
    tacno: string[];
    setTime;

  constructor( private startService: StartService, private router: Router ) { }

  ngOnInit() {

    this.startService.onActive(false);
    this.startService.resetGame();
    this.startService.dataLoad().subscribe(( data: GameData) => {
      this.region = data.oblast;
      this.startService.listOfCities = data.ponudjene;
      this.startService.setCorrectCities(data.tacno);
      this.gameTime = data.vreme;
    });

    this.setTime = setInterval(() => {
      if (this.gameTime === 0) {
        this.startService.setSelectedCity();
        this.startService.onActive(true);
        this.router.navigate(['resault']);
        clearInterval(this.setTime);
      } else {
        this.gameTime--;
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.setTime) {
      clearInterval(this.setTime);
    }
  }

}
