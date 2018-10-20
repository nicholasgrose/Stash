import { Injectable } from '@angular/core';

import { Stitch, RemoteMongoClient, AnonymousCredential, GoogleRedirectCredential } from "mongodb-stitch-browser-sdk";


// connects the stitch app GoogleAuth
/*
const appId = 'googleauth-jyvbi';
const client = Stitch.initializeDefaultAppClient(appId);
const mdb = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas');
*/

@Injectable({
  providedIn: 'root'
})
export class MongodbService {

  constructor() {
    this.appId = 'googleauth-jyvbi';
    this.client = Stitch.initializeDefaultAppClient(this.appId);
    this.mdb = this.client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas');

  }

  authenticate() {
    if (!this.client.auth.isLoggedIn) {
      const credential = new GoogleRedirectCredential();
      Stitch.defaultAppClient.auth.loginWithRedirect(credential);
    } else {
      console.log("Error: User is already logged in: " + this.client.auth.user.id);
    }
  }

  addEntry(entry: Object) {
    if (this.client.auth.isLoggedIn) {
      const collection = this.mdb.db('StashDB').collection('StashCollection');
      collection.insert({ owner_id: this.client.auth.user.id, message: "Database working " + Date.now() });
    } else {
      console.log("Error: User is not logged in");
    }
  }

  getEntries(query: Object) : any[] {
    const collection = this.mdb.db('StashDB').collection('StashCollection');
    collection.find(query).asArray().then(results => {
      return results;
      console.log(results);
    });
  }

  getEntry(query: Object) : any {
    const collection = this.mdb.db('StashDB').collection('StashCollection');
    collection.findOne(query).then(result => {
      return result;
    });
  }
}
