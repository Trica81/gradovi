import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ResaultService } from './resault.service';
import { ShapeOptions, LineProgressComponent } from 'angular2-progressbar';

@Component({
  selector: 'app-resault-page',
  templateUrl: './resault-page.component.html',
  styleUrls: ['./resault-page.component.css']
})
export class ResaultPageComponent implements OnInit, AfterViewInit {
  answers: string[];
  score: number;

  @ViewChild(LineProgressComponent) lineComp: LineProgressComponent;

  private lineOptions: ShapeOptions = {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1500,
    color: '#ccc',
    trailColor: '#eee',
    from: 0,
    to: 10,
    svgStyle: { width: '100%' }
  };

  constructor( private resaultService: ResaultService, private ref: ElementRef) { }

  ngOnInit() {
    this.resaultService.correct.subscribe((data) => {
      this.answers = data;
    });
    this.score = this.resaultService.score();
  }

  ngAfterViewInit () {
    console.log(this.answers);
    this.ref.nativeElement.querySelector('svg').style.border = '1px solid black';
    const progress =  this.score / this.answers.length;
    this.lineComp.animate(progress);
  }

}
