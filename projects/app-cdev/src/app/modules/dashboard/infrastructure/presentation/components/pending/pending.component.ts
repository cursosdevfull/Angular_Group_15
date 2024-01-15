import { Component } from '@angular/core';

@Component({
  selector: 'cdev-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css'],
})
export class PendingComponent {
  amountPending = 1200;
  studentsDebt = 3;
}
