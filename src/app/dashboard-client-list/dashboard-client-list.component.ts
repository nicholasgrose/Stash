import { MongodbService } from './../mongodb.service';
import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../transaction';
import { User } from '../user';

@Component({
  selector: 'app-dashboard-client-list',
  templateUrl: './dashboard-client-list.component.html',
  styleUrls: ['./dashboard-client-list.component.css']
})
export class DashboardClientListComponent implements OnInit {
  @Input() clientList: Transaction[];
  @Input() userList: User[];

  constructor( private mongoDB: MongodbService ) { }

  ngOnInit() {
  }

  getUserName(userId: string): string {
    return this.userList.find(user => user.id === userId).name;
  }

}
