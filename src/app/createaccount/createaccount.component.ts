import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../mongodb.service';
import { User } from '../user';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  name: string;
  email: string;
  billingAddress: string;
  payment: string;

  constructor( private mongoDB : MongodbService ) { }

  ngOnInit() {
    //log the user in
    let client = this.mongoDB.client;
    if (client.auth.hasRedirectResult()) {
      client.auth.handleRedirectResult().then(user => {
          console.log(user);
      });
    }


  }

  submit() {
    //TODO: check that no boxes are empty
    user: User = {
      id: this.mongoDB.client.auth.id,
      payment: this.payment,
      name: this.name,
      billingAddress: this.billingAddress,
      email: this.email,
      rating: 5,
      availability: [];
    }
    this.mongoDB.addEntry('Users', user);
    });
  }

}
