import { DashboardComponent } from './../dashboard/dashboard.component';
import { AppComponent } from './../app.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { MongoDbComponent } from '../mongo-db/mongo-db.component';
import { CreateaccountComponent } from '../createaccount/createaccount.component';

const routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'mongo', component: MongoDbComponent },
  { path: 'createaccount', component: CreateaccountComponent },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
