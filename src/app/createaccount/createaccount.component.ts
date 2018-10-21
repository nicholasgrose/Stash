import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../mongodb.service';
import { User } from '../user';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  newUser: User = {
    id: '',
    name: '',
    billingAddress: '',
    email: '',
    rating: 5,
    availability: 0
  };

  constructor( private mongoDB: MongodbService ) { }

  ngOnInit() {
    // log the user in
    const client = this.mongoDB.client;
    if (client.auth.hasRedirectResult()) {
      client.auth.handleRedirectResult().then(user => {
        console.log(user);
      });
    }

    if (!this.mongoDB.client.auth.isLoggedIn) {
      window.location.href = './welcome';
    }

    this.mongoDB.printEntries('Users', {});

    this.mongoDB.getEntries('Users', {id: this.mongoDB.client.auth.user.id}).then( x => {
      if (x.length > 0) {
        window.location.href = './dashboard';
      }
    });
  }

  submit() {
    this.newUser.id = this.mongoDB.client.auth.user.id;

    this.mongoDB.addEntry('Users', this.newUser).then(() => window.location.href = './dashboard');
  }

  removeTransaction(collec: string, query: Object) {
    this.mongoDB.deleteEntry(collec, query);
  }


}
