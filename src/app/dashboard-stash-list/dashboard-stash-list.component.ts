import { Component, OnInit, Input } from '@angular/core';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-dashboard-stash-list',
  templateUrl: './dashboard-stash-list.component.html',
  styleUrls: ['./dashboard-stash-list.component.css']
})
export class DashboardStashListComponent implements OnInit {
  @Input() stashList: Transaction[];

  constructor() { }

  ngOnInit() {
  }

}
