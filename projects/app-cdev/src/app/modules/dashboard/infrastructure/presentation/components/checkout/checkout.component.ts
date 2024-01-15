import { Component } from '@angular/core';

@Component({
  selector: 'cdev-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  amountPaid = 8500;
  amountToPay = 10000;
}
