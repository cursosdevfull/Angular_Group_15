import { Component } from '@angular/core';

import { ListItem } from './interfaces/list-item.interface';
import mocksListItems from './mocks/list-items.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  list: ListItem[] = mocksListItems;
}
