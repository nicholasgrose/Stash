import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../mongodb.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private mongoDB: MongodbService) { }

  ngOnInit() {
    const client = this.mongoDB.client;
    if (client.auth.hasRedirectResult()) {
      client.auth.handleRedirectResult().then(user => {
        console.log(user);
      });
    }
  }

  setAvailableSpace(query: Object, space: number) {
    this.mongoDB.updateEntry('Users', query, 'availability', space);
  }

}
