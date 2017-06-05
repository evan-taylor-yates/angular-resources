import { Component } from '@angular/core';

@Component({
  selector: 'basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.css']
})
export class BasicListComponent {
  items = [
    'Angular4',
    'React',
    'Underscore'
  ];
  newItem = '';
  pushItem(): void {
    if (this.newItem !== '') {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }
  removeItem(index: number): void {
    this.items.splice(index, 1);
  };
}
