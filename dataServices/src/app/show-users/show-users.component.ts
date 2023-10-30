import { Component, Inject } from '@angular/core';

import { serviceUser } from '../app.module';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css'],
})
export class ShowUsersComponent {
  list: string[] = [];

  //constructor(@Inject('USER_SERVICE') userService: UserService) {
  //constructor(@Inject(UsuarioService) userService: UserService) {
  constructor(@Inject(serviceUser) userService: UserService) {
    const service = userService; //UserService.create();
    this.list = service.getList();

    setInterval(() => {
      service.remove();
      this.list = service.getList();
    }, 2000);
  }
}
