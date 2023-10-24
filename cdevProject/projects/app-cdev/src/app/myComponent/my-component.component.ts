import { Component } from '@angular/core';

@Component({
  selector: 'cdev-my-component',
  templateUrl: './my-component.html',
  styleUrls: ['./my-component.css'],
})
export class MyComponent {
  currentDate = new Date().toISOString();

  users = [
    { name: 'John', email: 'sergiohidalgo@correo.com', status: 'Active' },
    { name: 'Carmen', email: 'carmen@correo.com', status: 'Disabled' },
  ];

  constructor() {
    console.log('users', this.users);
  }
}
