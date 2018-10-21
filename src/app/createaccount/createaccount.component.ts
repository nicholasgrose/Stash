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
    payment: '',
    name: '',
    billingAddress: '',
    email: '',
    rating: 5,
    availability: 0
  };
  name: string;
  email: string;
  billingAddress: string;
  payment: string;
  end_date: number;
  boxes: number;

  constructor( private mongoDB: MongodbService ) { }

  ngOnInit() {
    // log the user in
    const client = this.mongoDB.client;
    if (client.auth.hasRedirectResult()) {
      client.auth.handleRedirectResult().then(user => {
        console.log(user);
      });
    }
  }

  submit() {
    this.newUser.id = this.mongoDB.client.auth.user.id;
    this.newUser.payment = this.payment;

    this.mongoDB.addEntry('Users', this.newUser);
  }

  removeTransaction(collec: string, query: Object) {
    this.mongoDB.deleteEntry(collec, query);
  }
}
