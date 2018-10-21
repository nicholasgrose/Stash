import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../mongodb.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-stashsomething',
  templateUrl: './stashsomething.component.html',
  styleUrls: ['./stashsomething.component.css']
})
export class StashsomethingComponent implements OnInit {
  stash_id: string;
  selectedAddress: string;
  boxes: number;
  start_date: string;
  end_date: string;
  address: string;

  constructor( private mongoDB: MongodbService ) { }

  ngOnInit() {
  }

  addTransaction() {
    // TODO: 4 text boxes, 1 dropdown box with addresses
    if (this.boxes < 1) {
      return;
    }// else if (start_date > end_date) TODO: convert date input to ms since epoch

    this.mongoDB.getEntries('Users', {
      'billingAddress': this.address
      }).then(x => this.stash_id = x[0].id);

    const transaction: Transaction = {
      start_date: this.start_date,
      end_date: this.end_date,
      boxes: this.boxes,
      address: this.address,
      client_id: this.mongoDB.client.auth.user.id,
      stash_id: this.stash_id
    };

    this.mongoDB.addEntry('Transactions', transaction);
  }


}
