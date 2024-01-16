import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContentComponent } from './core/components/content/content.component';
import { HeaderComponent } from './core/components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent, ContentComponent, RouterModule],
})
export class AppComponent {
  title = 'appStandalone';
}
