import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ILayout } from './layout.interface';
import { LAYOUT_TOKEN } from './layout.token';

@Injectable()
export class LayoutService {
  showMenu: boolean;
  showHeader: boolean;

  private readonly configRx: BehaviorSubject<ILayout>;

  constructor(@Inject(LAYOUT_TOKEN) private layout: ILayout) {
    console.log('LayoutService constructor');
    console.log('LayoutService layout: ', layout);
    this.showMenu = layout.showMenu;
    this.showHeader = layout.showHeader;

    this.configRx = new BehaviorSubject<ILayout>(layout);
  }

  set configuration(config: ILayout) {
    this.configRx.next(config);
  }

  get configuration(): Observable<ILayout> {
    return this.configRx.asObservable();
  }
}
