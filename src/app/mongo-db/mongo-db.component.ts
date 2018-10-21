import { Component, OnInit } from '@angular/core';
// import { Stitch, RemoteMongoClient, AnonymousCredential, GoogleRedirectCredential } from "mongodb-stitch-browser-sdk";
import { MongodbService } from '../mongodb.service';

// connects the stitch app GoogleAuth
/*
const appId = 'googleauth-jyvbi';
const client = Stitch.initializeDefaultAppClient(appId);
const mdb = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas');
*/

@Component({
  selector: 'app-mongo-db',
  templateUrl: './mongo-db.component.html',
  styleUrls: ['./mongo-db.component.css']
})
export class MongoDbComponent implements OnInit {

  constructor( public mongoDB: MongodbService ) { }

  ngOnInit() { // TODO: move to whereever we put the user after they log in
    const client = this.mongoDB.client;
    if (client.auth.hasRedirectResult()) {
      client.auth.handleRedirectResult().then(user => {
          console.log(user);
      });
    }
    // this.mongoDB.deleteEntries('Users', {});
  }


  /*
  addEntry(entry: Object) {
    const collection = mdb.db('StashDB').collection('StashCollection');
    collection.insert({ owner_id: client.auth.user.id, message: "Database working " + Date.now() });

    console.log( {owner_id: client.auth.user.id, message: "Database working " + Date.now() });
  }

  printDB(query: Object) {
    const collection = mdb.db('StashDB').collection('StashCollection');
    collection.find(
      { owner_id: client.auth.user.id }
    ).asArray().then(results => {
      console.log(results)
    });
  }
  */
}
