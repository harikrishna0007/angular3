import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
arrayData;
  constructor(public http : HttpClient) { }

  ngOnInit() {
    this.http.get('https://5d11aa0e84e90600145763ba.mockapi.io/mint')
    .toPromise()
    .then((response) => {
      console.log(response);
      this.arrayData = response;
    },(error) => {
      console.log(error);
    });
  }

}
