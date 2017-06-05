// Concepts applied in this component (along with child components):
// -Passing data from a child component to its parent component
// -Passing data from a parnet component to its child component
// -How to allow for components to automatically inherit stylesheets
//   from parent component (the default is called StyleEncapsulation)
// -Passing in HTML code into component by putting code in parent component's
// html file, between the child component's html tag, then adding ng-content in
// the child's html file where you want the code to be injected
// -LIFECYCLE HOOKS!!! (in child component)

import { Component } from '@angular/core';

@Component({
  selector: 'server-parent',
  templateUrl: './server-parent.component.html',
  styleUrls: ['./server-parent.component.css']
})
export class ServerParentComponent {
  serverElements = [
    {type: 'server', name: 'Testserver', content: 'Just a test!'}
  ];
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    console.log('Server Added!');
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    console.log('Blueprint Added!');
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  onChangeFirst() {
    this.serverElements[0].name = 'Changed';
  }
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}

