import { Component } from '@angular/core';

@Component({
  selector: 'binding',      // METHOD 1: by element
  // selector: '[item]', // METHOD 2: by attribute
  // selector: '.item',  // METHOD 3: by class
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  serverId = 10;
  serverStatus = 'offline'
  serverOn = false;
  allowNewServer = true;
  serverCreationStatus = 'No item was created!';
  serverName = 'my-item';
  buttonStatus = 'enabled';
  constructor() {
    // setTimeout(() => {
    //   this.changeAllowance();
    // }, 2000);
  }
  checkStatus() {
    return this.serverStatus;
  }
  switchServerStatus() {
    this.serverOn = !this.serverOn;
    if (this.serverStatus === 'offline') {
      this.serverStatus = 'online';
    } else {
      this.serverStatus = 'offline';
    }
  }
  getText() {
    if (!this.allowNewServer) {
      return 'allow';
    } else {
      return 'prohibit';
    }
  }
  changeAllowance() {
    this.allowNewServer = !this.allowNewServer;
    if (this.buttonStatus === 'enabled') {
      this.buttonStatus = 'disabled';
    } else {
      this.buttonStatus = 'enabled';
    }
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
  increaseId() {
    this.serverId++;
  }
}
