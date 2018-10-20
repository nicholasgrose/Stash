import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  messages: any[] = [
    {
      client: 'Bob',
      storageRequested: 1,
      stashDescription: 'Pictures',
      timePeriod: 3
    },
    {
      client: 'Bob',
      storageRequested: 1,
      stashDescription: 'Pictures',
      timePeriod: 4
    },
    {
      client: 'Bob',
      storageRequested: 1,
      stashDescription: 'Pictures',
      timePeriod: 5
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
