import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.css']
})
export class EventEmitterComponent {
  @Output() custom_event = new EventEmitter<string>();

  onSelect(data: string) {
    this.custom_event.emit(data);
  }
}
