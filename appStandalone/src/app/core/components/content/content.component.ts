import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ShoppingCartModule } from '../../modules/shopping-cart/shopping-cart.module';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, ShoppingCartModule],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {}
