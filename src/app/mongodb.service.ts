import { Injectable } from '@angular/core';

import { Stitch,
  RemoteMongoClient,
  GoogleRedirectCredential,
  StitchAppClient,
  RemoteMongoCollection,
  RemoteInsertOneResult
} from 'mongodb-stitch-browser-sdk';

@Injectable({
  providedIn: 'root'
})
export class MongodbService {
  appId: string;
  client: StitchAppClient;
  mdb: RemoteMongoClient;

  constructor() {
    this.appId = 'googleauth-jyvbi';
    this.client = Stitch.initializeDefaultAppClient(this.appId);
    this.mdb = this.client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas');
  }

  authenticate(callback: string): void {
    if (!this.client.auth.isLoggedIn) {
      const credential = new GoogleRedirectCredential(callback);
      Stitch.defaultAppClient.auth.loginWithRedirect(credential);
    } else {
      console.log('Error: User is already logged in: ' + this.client.auth.user.id);
    }
  }

  addEntry(collec: string, entry: Object): Promise<RemoteInsertOneResult> {
    if (this.client.auth.isLoggedIn) {
      const collection = this.mdb.db('StashDB').collection(collec);
      return collection.insertOne(entry);
    } else {
      console.log('Error: User is not logged in');
      return null;
    }
  }

  getEntries(collec: string, query: Object): Promise<any[]> {
    const collection: RemoteMongoCollection<any[]> = this.mdb.db('StashDB').collection(collec);
    return collection.find(query).asArray();
  }

  printEntries(collec: string, query: Object): void {
    this.getEntries(collec, query).then(results => { console.log(results); });
  }

  deleteEntries(collec: string, query: Object): void {
    const collection = this.mdb.db('StashDB').collection(collec);
    collection.deleteMany(query);
  }

  deleteEntry(collec: string, query: Object): void {
    const collection = this.mdb.db('StashDB').collection(collec);
    collection.deleteOne(query);
  }

  updateEntry(collec: string, query: Object, property: string, newVal: number): void {
    const collection = this.mdb.db('StashDB').collection(collec);
    this.getEntries(collec, query).then(x => {
      x[0][property] = newVal;
      collection.updateOne(query, x[0]);
    });
  }
}
