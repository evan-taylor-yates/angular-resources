import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations: [
    trigger('myAnimation', [
      state('smaller', style({
        transform: 'scale(1)'
      })),
      state('larger', style({
        transform: 'scale(3)'
      })),
      transition('smaller <=> larger', animate('300ms ease-in'))
    ])
  ]
})
export class AnimationsComponent {
  state= 'smaller';
  animate() {
    this.state = this.state === 'larger' ? 'smaller' : 'larger';
  }
}
