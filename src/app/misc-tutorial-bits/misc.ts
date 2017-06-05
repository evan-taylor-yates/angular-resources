
// OLD SERVER COMPONENT
// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'component-iterator',
//   templateUrl: './component-iterator.component.html',
//   styleUrls: ['./component-iterator.component.css']
// })
// export class ServerComponent {
//   serverId = 10;
//   serverStatus = 'offline'
//   serverOn = false;
//   allowNewServer = false;
//   serverCreationStatus = 'No item was created!';
//   serverName = 'my-item';
//   constructor() {
//     // setTimeout(() => {
//     //   this.changeAllowance();
//     // }, 2000);
//   }
//   checkStatus() {
//     return this.serverStatus;
//   }
//   switchServerStatus() {
//     this.serverOn = !this.serverOn;
//     if (this.serverStatus === 'offline') {
//       this.serverStatus = 'online';
//     } else {
//       this.serverStatus = 'offline';
//     }
//   }
//   getText() {
//     if (!this.allowNewServer) {
//       return 'allow';
//     } else {
//       return 'prohibit';
//     }
//   }
//   changeAllowance() {
//     this.allowNewServer = !this.allowNewServer;
//   }
//   onCreateServer() {
//     this.serverCreationStatus = 'Server was created!';
//   }
//   onUpdateServerName(event: any) {
//     this.serverName = event.target.value;
//   }
// }
//
