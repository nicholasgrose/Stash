import { MongodbService } from './../mongodb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {
  messageList;
  stashList;
  clientList;
  displayedList: ActiveList = ActiveList.Message;

  constructor(private mongoDb: MongodbService) { }

  ngOnInit() {
    this.clientList = this.mongoDb.getEntries('Transactions', { 'stash_id': this.mongoDb.client.auth.user.id }).then(x => x);
    this.stashList = this.mongoDb.getEntries('Transactions', { 'client_id': this.mongoDb.client.auth.user.id }).then(x => x);
    this.messageList = [];
  }

  setDisplayedList(list: ActiveList): void {
    this.displayedList = list;
  }

  isMessageList(): boolean {
    return this.displayedList === ActiveList.Message;
  }
  isStashList(): boolean {
    return this.displayedList === ActiveList.Stash;
  }
  isClientList(): boolean {
    return this.displayedList === ActiveList.Client;
  }
}

enum ActiveList {
  Message,
  Stash,
  Client
}
