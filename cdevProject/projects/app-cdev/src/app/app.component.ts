import { Component } from '@angular/core';

@Component({
  selector: 'cdev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'appCdev';
  currentDate = new Date().toISOString();
}
