import { Component, OnInit } from '@angular/core';

// SERVICES
import { MyDataService } from '../services/my-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private newService: MyDataService) {
  }
  ngOnInit() {
    // this.newService.fetchData();
  }
}
