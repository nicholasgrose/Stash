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

  end_date: number;
  boxes: [];




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
      id: this.mongoDB.client.auth.user.id,
      payment: this.payment,
      name: this.name,
      billingAddress: this.billingAddress,
      email: this.email,
      rating: 5,
      availability: [];
    }
    this.mongoDB.addEntry('Users', user);
  }

  addTransaction() {
    //TODO: UI with text box for end date, (dropdown?) for selected location,
    //scaling number of text boxes for boxes with dimensions and descriptions
    if (boxes < 1) {
      return;
    }// else if (start_date > end_date) TODO: convert date input to ms since epoch

    let transaction = {
      start_date: this.start_date,
      end_date: this.end_date,
      boxes: this.boxes,
      client_id: this.mongoDB.client.auth.user.id
    }

    transaction.stash_id = this.mongoDB.getEntries('Transactions', {
        address: this.selectedAddress
      }).then(x => { return x[0].id });

    this.mongoDB.addEntry('Transactions', transaction);
  }

}
