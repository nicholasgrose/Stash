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
    if (!this.mongoDB.client.auth.isLoggedIn) {
      window.location.href = './welcome';
    }

<<<<<<< HEAD
    /*this.mongoDB.getEntries('Users', {id:this.mongoDB.client.auth.user.id}).then( x => {
=======
    this.mongoDB.getEntries('Users', {id: this.mongoDB.client.auth.user.id}).then( x => {
>>>>>>> 67f39f13721f66d76ebdb91b19959545df204849
      if (x.length === 0) {
        window.location.href = './createaccount';
      }
    });*/
  }

  setAvailableSpace(query: Object) {
    this.mongoDB.updateEntry('Users', query, 'boxes', prompt("How much space do you have available?"));
  }

}
