import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../mongodb.service';

@Component({
  selector: 'app-stashsomething',
  templateUrl: './stashsomething.component.html',
  styleUrls: ['./stashsomething.component.css']
})
export class StashsomethingComponent implements OnInit {

  constructor( private mongoDB : MongodbService ) { }

  ngOnInit() {
  }

  addTransaction() {
    //TODO: 4 text boxes, 1 dropdown box with addresses
    if (boxes < 1) {
      return;
    }// else if (start_date > end_date) TODO: convert date input to ms since epoch

    this.stash_id = this.mongoDB.getEntries('Transactions', {
        address: this.selectedAddress
      }).then(x => { return x[0].id });

    let transaction = {
      start_date: this.start_date,
      end_date: this.end_date,
      boxes: this.boxes,
      address: this.address,
      client_id: this.mongoDB.client.auth.user.id,
      stash_id: stash_id
    }

    this.mongoDB.addEntry('Transactions', transaction);
  }


}
