import { Component } from '@angular/core';

import { MenuItem, MenuService } from '../../services/menu.service';

@Component({
  selector: 'cdev-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  readonly menuItems: MenuItem[];

  constructor(private readonly menuService: MenuService) {
    this.menuItems = this.menuService.getMenuItems();
  }
}
