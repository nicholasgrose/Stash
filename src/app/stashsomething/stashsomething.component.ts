import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../mongodb.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-stashsomething',
  templateUrl: './stashsomething.component.html',
  styleUrls: ['./stashsomething.component.css']
})
export class StashsomethingComponent implements OnInit {
  newTransaction: Transaction = {
    client_id: '',
    stash_id: '',
    address: '',
    description: '',
    start_date: '',
    end_date: '',
    boxes: 0
  };
  stash_id: string;
  possibleAddresses: Transaction[];
  filteredAddresses: string[];

  constructor( private mongoDB: MongodbService ) { }

  ngOnInit() {
    this.mongoDB.getEntries('Users', { 'availability': { $gt: 0 } }).then(x => {
      this.possibleAddresses = x;
      this.filteredAddresses = x;
    });
  }

  submit() {
    if (this.newTransaction.boxes < 1) {
      return;
    }// else if (start_date > end_date) TODO: convert date input to ms since epoch
    this.mongoDB.getEntries('Users', {
      'billingAddress': this.newTransaction.address
      }).then(x => this.stash_id = x[0].id).then(() => {
        this.newTransaction.client_id = this.mongoDB.client.auth.user.id;
        this.newTransaction.stash_id = this.stash_id;

        this.mongoDB.addEntry('Transactions', this.newTransaction).then(() => window.location.href = '/dashboard');
      });
  }

  filterAddresses(): void {
    this.filteredAddresses = this.possibleAddresses
      .filter(value => value.availability >= this.newTransaction.boxes)
      .map(value => value.address);
  }

}
