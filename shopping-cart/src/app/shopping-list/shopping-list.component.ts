import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { ListItem } from '../interfaces/list-item.interface';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnChanges {
  @Input() list!: ListItem[];

  constructor() {}

  ngOnChanges() {}

  ngOnInit() {
    console.log('OnInit ShoppingList');
    console.log('listItems: ', this.list);
  }
}
