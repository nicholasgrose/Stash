import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MongoDbComponent } from './mongo-db/mongo-db.component';
import { MapComponent } from './map/map.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    WelcomeComponent,
    MongoDbComponent,
    MapComponent,
    DashboardComponent,
    DashboardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
