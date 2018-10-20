import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidebarToggled = true;

  toggleSidebar() {
    this.sidebarToggled = !this.sidebarToggled;
  }
}
