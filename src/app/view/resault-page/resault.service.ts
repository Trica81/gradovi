import { AppService } from 'src/app/service/app.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ResaultService {

    correct = new Subject<string[]>();
    userAnswer: string[];
    constructor( private appService: AppService) { }

    score() {
        this.correct.next(this.appService.correctAnswers);
        this.userAnswer = this.appService.selectedCity;
        return this.countCorrect(this.appService.selectedCity, this.appService.correctAnswers);
    }

    countCorrect(user: string[], correct: string[]) {
        let count = 0;
        correct.forEach( (item) => {
          const found = user.find(el => el === item);
          if (found) {
             count++;
            }
        });
        return count;
    }
}
