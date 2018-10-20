import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../mongodb.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  messages: any[] = [
    {
      client: 'Bob',
      storageRequested: 1,
      stashDescription: 'Pictures',
      timePeriod: 3
    },
    {
      client: 'Bob',
      storageRequested: 1,
      stashDescription: 'Pictures',
      timePeriod: 4
    },
    {
      client: 'Bob',
      storageRequested: 1,
      stashDescription: 'Pictures',
      timePeriod: 5
    }
  ];

  constructor( mongoDB : MongodbService) { }

  ngOnInit() {
    if (this.mongoDB.client.auth.hasRedirectResult()) {
      this.mongoDB.client.auth.handleRedirectResult().then(user => {
          console.log(user);
      });
    }
  }

}
