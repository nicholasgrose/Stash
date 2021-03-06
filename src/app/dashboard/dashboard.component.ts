import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../mongodb.service';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: User;
  userAvailability: number;

  constructor(private mongoDB: MongodbService) { }

  ngOnInit() {
    const client = this.mongoDB.client;
    if (client.auth.hasRedirectResult()) {
      client.auth.handleRedirectResult().then(user => {
        console.log(user);
      });
    }
    if (!this.mongoDB.client.auth.isLoggedIn) {
      window.location.href = './welcome';
    }

    this.mongoDB.getEntries('Users', {id: this.mongoDB.client.auth.user.id}).then( x => {
      if (x.length === 0) {
        window.location.href = './createaccount';
      } else {
        this.currentUser = x[0];
      }
    });
  }

  onSubmit() {
    this.currentUser.availability = this.userAvailability;
    this.mongoDB.updateEntry('Users', { 'id': this.currentUser.id }, 'availability', this.userAvailability);
  }

}
