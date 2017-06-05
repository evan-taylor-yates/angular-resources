import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  showArray = false;
  myArray = [
    'Taylor',
    'Kate',
    'Maggie',
    'Brian',
    'Rachel',
    'Cathy',
    'David',
    'Eric',
    'Nick',
    'Erik',
    'Augustin'
  ];
  classNum = 1;
  constructor() {
    this.showArray = Math.random() > 0.5; // returns true if greater than .5, false otherwise
  }
  getActionTag() {
    return this.showArray ? 'Hide Array' : 'Show Array';
  }
  getColor() {
    return this.showArray ? 'green' : 'red';
  }
  incrementClassNum() {
    this.classNum > 2 ? this.classNum = 1 : this.classNum++;
  }
}
