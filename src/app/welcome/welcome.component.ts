import { Component, OnInit } from '@angular/core';
import { MongodbService } from '../mongodb.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor( public mongoDB: MongodbService ) { }

  ngOnInit() {
    if (this.mongoDB.client.auth.isLoggedIn) {
      window.location.href = './dashboard';
    }
  }

}
