import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrderListComponent } from './order-list/order-list.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [OrderListComponent],
  imports: [CommonModule],
  exports: [OrderListComponent],
  providers: [CartService],
})
export class ShoppingCartModule {}
