import { MapComponent } from './../map/map.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { MongoDbComponent } from '../mongo-db/mongo-db.component';

const routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'mongo', component: MongoDbComponent },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
