import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-dashboard-client-list',
  templateUrl: './dashboard-client-list.component.html',
  styleUrls: ['./dashboard-client-list.component.css']
})
export class DashboardClientListComponent implements OnInit {
  @Input() clientList: Transaction[];

  constructor() { }

  ngOnInit() {
  }

}
