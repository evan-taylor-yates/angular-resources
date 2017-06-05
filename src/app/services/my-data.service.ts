import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; // Used in fetchData

@Injectable()
export class MyDataService {
  obj = {
    id: '1',
    name: 'Taylor',
    rollno: '2342'
  };
  constructor(private http: Http) {
  }
  fetchData() {
    return this.http.get('src/data/students.json').map( // Map used to format Observable
      (response) => response.json()
    ).subscribe(
      (data) => console.log(data)
    );
  }
  success() {
    return 'Successful';
  }
}
