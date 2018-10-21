import { Transaction } from './../transaction';
import { MongodbService } from './../mongodb.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {
  messageList: Transaction[];
  stashList: Transaction[];
  clientList: Transaction[];
  userList: User[];
  displayedList: ActiveList = ActiveList.Message;

  constructor(private mongoDb: MongodbService) { }

  ngOnInit() {
    this.mongoDb.getEntries('Transactions', { 'stash_id': this.mongoDb.client.auth.user.id }).then(x => this.clientList = x);
    this.mongoDb.getEntries('Transactions', { 'client_id': this.mongoDb.client.auth.user.id }).then(x => this.stashList = x);
    this.messageList = [];
    this.mongoDb.mdb.db('StashDB').collection('Users').find({}).asArray().then(response => this.userList = response as User[]);
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
