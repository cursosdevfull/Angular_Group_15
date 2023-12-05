import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MenuService } from '../../../core/services/menu.service';

@Component({
  selector: 'cdev-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent {
  icon: string;
  title: string;
  quantity: number = 215.34;
  text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

  constructor(
    private readonly menuService: MenuService,
    private readonly activatedRoute: ActivatedRoute
  ) {
    const currentPath =
      '/' + this.activatedRoute.snapshot.pathFromRoot[1].routeConfig!.path;

    const menuItems = this.menuService.getMenuItems();
    const menuItem = menuItems.find((item) => item.path === currentPath);

    if (menuItem) {
      this.icon = menuItem.icon;
      this.title = menuItem.title;
    }
  }
}
