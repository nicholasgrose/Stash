import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../mongodb.service';
import { User } from '../user';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  newUser: User;
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

    if (!this.mongoDB.client.auth.isLoggedIn) {
      window.location.href = './welcome';
    }

    this.mongoDB.getEntries('Users', {id:this.mongoDB.client.auth.user.id}).then( x => {
      if (x.length > 0) {
        window.location.href = './dashboard';
      }
    })
  }

  submit() {
    // TODO: 4 text boxes
    // TODO: check that no boxes are empty
    const user: User = {
      id: this.mongoDB.client.auth.user.id,
      payment: this.payment,
      name: this.name,
      billingAddress: this.billingAddress,
      email: this.email,
      rating: 5,
      availability: 0
    };
    this.mongoDB.addEntry('Users', user);
  }

  removeTransaction(collec: string, query: Object) {
    this.mongoDB.deleteEntry(collec, query);
  }


}
