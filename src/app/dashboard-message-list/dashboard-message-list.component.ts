import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-dashboard-message-list',
  templateUrl: './dashboard-message-list.component.html',
  styleUrls: ['./dashboard-message-list.component.css']
})
export class DashboardMessageListComponent implements OnInit {
  @Input() messageList: Transaction[];

  constructor() { }

  ngOnInit() {
  }

}
