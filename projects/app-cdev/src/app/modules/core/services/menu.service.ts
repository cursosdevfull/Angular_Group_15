import { Injectable } from '@angular/core';

export interface MenuItem {
  icon: string;
  title: string;
  path: string;
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuItems: MenuItem[] = [
    { icon: 'dashboard', title: 'Dashboard', path: '/dashboard' },
    { icon: 'library_books', title: 'Course', path: '/course' },
    { icon: 'schedule', title: 'Schedule', path: '/schedule' },
    { icon: 'people', title: 'User', path: '/user' },
  ];
  constructor() {}

  getMenuItems(): MenuItem[] {
    return [...this.menuItems];
  }
}
