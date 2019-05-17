import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso: number = 10;
  progreso2: number = 40;
  constructor() { }

  ngOnInit() {
  }
  actualizar(event) {
    console.log(event);
    this.progreso = event;


  }

}
