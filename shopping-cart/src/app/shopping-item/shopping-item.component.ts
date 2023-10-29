import { Component, Input } from '@angular/core';

import { ListItem } from '../interfaces/list-item.interface';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
})
export class ShoppingItemComponent {
  @Input() item!: ListItem;

  constructor() {
    console.log('constructor Item');
  }

  ngOnChanges() {
    console.log('OnChanges Item', this.item);
  }

  ngOnInit() {
    console.log('OnInit Item');
    console.log('item: ', this.item);
  }
}
