import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../transaction';
import { User } from '../user';

@Component({
  selector: 'app-dashboard-message-list',
  templateUrl: './dashboard-message-list.component.html',
  styleUrls: ['./dashboard-message-list.component.css']
})
export class DashboardMessageListComponent implements OnInit {
  @Input() messageList: Transaction[];
  @Input() userList: User[];

  constructor() { }

  ngOnInit() {
  }

  getUserName(client_id: string): string {
    return this.userList.find(val => val.name === client_id).name;
  }
}
