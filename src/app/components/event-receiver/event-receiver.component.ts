import { Component } from '@angular/core';

@Component({
  selector: 'event-receiver',
  templateUrl: './event-receiver.component.html',
  styleUrls: ['./event-receiver.component.css']
})
export class EventReceiverComponent {
  display_message = false;

  receiveEvent(message: string) {
    console.log(message);
    if (message === 'hide') {
      this.display_message = false;
    } else {
      this.display_message = true;
    }
  }
}
