import { MongodbService } from './../mongodb.service';
import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../transaction';
import { User } from '../user';
import { resolve } from 'url';

@Component({
  selector: 'app-dashboard-stash-list',
  templateUrl: './dashboard-stash-list.component.html',
  styleUrls: ['./dashboard-stash-list.component.css']
})
export class DashboardStashListComponent implements OnInit {
  @Input() stashList: Transaction[];
  @Input() userList: User[];

  constructor( private mongoDB: MongodbService ) {
    console.log('hi');
  }

  ngOnInit() {
  }

  getUserName(userId: string): string {
    return this.userList.find(user => user.id === userId).name;
  }

}
