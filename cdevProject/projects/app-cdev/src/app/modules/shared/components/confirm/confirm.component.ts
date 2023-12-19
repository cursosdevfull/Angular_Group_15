import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cdev-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ConfirmComponent {
  message: string = 'Are you sure?';
}
