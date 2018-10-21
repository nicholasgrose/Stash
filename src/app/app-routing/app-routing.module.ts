import { AboutComponent } from './../about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { MongoDbComponent } from '../mongo-db/mongo-db.component';
import { CreateaccountComponent } from '../createaccount/createaccount.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { StashsomethingComponent } from '../stashsomething/stashsomething.component';

const routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mongo', component: MongoDbComponent },
  { path: 'createaccount', component: CreateaccountComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'stashsomething', component: StashsomethingComponent },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
