import { Component, Input } from '@angular/core';

import { ListItems } from '../types/list-items.type';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  @Input('list') listItems!: ListItems;
}
