import { Component, Inject } from '@angular/core';

import { LayoutService, newServiceToken } from './app.module';
import { BookService } from './book.service';
import { MatPaginatorIntl } from './paginator.service';
import { UserService } from './user.service';

//import { UsuarioService } from './app.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userService: UserService;
  list: string[];

  //constructor(@Inject('USER_SERVICE') userService: UserService) {
  //constructor(@Inject(UsuarioService) userService: UserService) {
  constructor(
    @Inject(newServiceToken) userService: UserService,
    @Inject('LAYOUT') layout: { [k: string]: boolean },
    @Inject('CONFIG_LAYOUT') config: LayoutService,
    bookService: BookService,
    paginator: MatPaginatorIntl
  ) {
    this.userService = userService;
    this.list = this.userService.getList();

    this.addUser('Juan');
    console.log('layout', layout);
    console.log(config.useFullScreen());
    config.showParameters();
    console.log('books', bookService.getBooksAvailable());

    console.log('label', paginator.getRangeLabel(2, 30, 200));
  }

  addUser(user: string) {
    this.userService.addUser(user);
    this.list = this.userService.getList();
  }
}
