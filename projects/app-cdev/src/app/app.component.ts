import { Component } from '@angular/core';

import { environment } from '../environments/environment';
import { ILayout } from './config/modules/layout/layout.interface';
import { LayoutService } from './config/modules/layout/layout.service';

@Component({
  selector: 'cdev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showMenu: boolean = false;
  showHeader: boolean = false;

  constructor(private readonly layoutService: LayoutService) {
    this.layoutService.configuration.subscribe((layout: ILayout) => {
      this.showMenu = layout.showMenu;
      this.showHeader = layout.showHeader;
    });

    console.log('ambiente', environment.apiUrl);

    // console.log('AppComponent constructor');
    // this.showMenu = layoutService.showMenu;
    // this.showHeader = layoutService.showHeader;
  }
}
