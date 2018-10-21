import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MongoDbComponent } from './mongo-db/mongo-db.component';
import { MapComponent } from './map/map.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardMessageListComponent } from './dashboard-message-list/dashboard-message-list.component';
import { DashboardStashListComponent } from './dashboard-stash-list/dashboard-stash-list.component';
import { DashboardClientListComponent } from './dashboard-client-list/dashboard-client-list.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { StashsomethingComponent } from './stashsomething/stashsomething.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    WelcomeComponent,
    MongoDbComponent,
    MapComponent,
    DashboardComponent,
    DashboardListComponent,
    DashboardMessageListComponent,
    DashboardStashListComponent,
    DashboardClientListComponent,
    CreateaccountComponent,
    StashsomethingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
