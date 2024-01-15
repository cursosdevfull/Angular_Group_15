import { Component } from '@angular/core';

import { LayoutService } from '../../../../../../config/modules/layout/layout.service';

@Component({
  selector: 'cdev-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(layoutService: LayoutService) {
    layoutService.configuration = { showMenu: true, showHeader: true };
  }
}
