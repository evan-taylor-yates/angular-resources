import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../../services/my-data.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private newService: MyDataService) {
  }
  ngOnInit() {
    console.log(this.newService.obj.name);
  }

}
