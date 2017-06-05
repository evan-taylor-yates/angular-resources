import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'component-iterator',
  templateUrl: './component-iterator.component.html',
  styleUrls: ['./component-iterator.component.css']
})
export class ComponentIteratorComponent implements OnInit {
  form;
  items = [
    'Wallet',
    'Keys',
    'Phone',
    'Laptop',
    'Earbuds',
    'Laptop Charger',
    'Phone Charger',
    'Flash Drive',
    'Backpack'
  ];
  constructor() {
  }
  ngOnInit() {
    this.form = new FormGroup({
      itemName: new FormControl('', Validators.compose([
        Validators.required // This field is required
      ])),
    });
  }
    onSubmit(name) {
      this.items.push(name.itemName);
    }
    isOdd(num): number {
      return num % 2;
    }
}
