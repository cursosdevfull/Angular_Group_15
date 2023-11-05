import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css'],
})
export class ShowUsersComponent {
  list: any = [];

  constructor(@Inject('USER_SERVICE') service: any) {
    //constructor(service: UserService) {
    this.list = service.getUsers();

    setInterval(() => {
      const newUser = { name: `user ${this.list.length + 1}`, age: 30 };
      service.addUser(newUser);
      //this.list.push(newUser);
    }, 2000);
  }
}
