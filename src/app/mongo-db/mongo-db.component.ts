import { Component, OnInit } from '@angular/core';
import { Stitch, RemoteMongoClient, AnonymousCredential, GoogleRedirectCredential } from "mongodb-stitch-browser-sdk";


// connects the stitch app GoogleAuth
let appId = 'googleauth-jyvbi';
const client = Stitch.initializeDefaultAppClient(appId);
const mdb = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas');

@Component({
  selector: 'app-mongo-db',
  templateUrl: './mongo-db.component.html',
  styleUrls: ['./mongo-db.component.css']
})
export class MongoDbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (client.auth.hasRedirectResult()) {
      console.log("AAAAAAAAAAAAAAAAAAAA");
      client.auth.handleRedirectResult().then(user => {
          console.log(user);
      });
    }
    console.log(client.auth.user);
  }

  authenticate() {
    console.log("AAAAAAAA");
    if (!client.auth.isLoggedIn) {
      const credential = new GoogleRedirectCredential();
      Stitch.defaultAppClient.auth.loginWithRedirect(credential);
    }

  }

  addEntry() {
    const collection = mdb.db('StashDB').collection('StashCollection');
    collection.insert({ owner_id: client.auth.user.id, message: "Database working " + Date.now() });

    console.log( {owner_id: client.auth.user.id, message: "Database working " + Date.now() });
  }

  printDB() {
    const collection = mdb.db('StashDB').collection('StashCollection');
    collection.find(
      { owner_id: client.auth.user.id }
    ).asArray().then(results => {
      console.log(results)
    });
  }
}
