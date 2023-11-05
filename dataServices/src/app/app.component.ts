import { Component, Inject } from '@angular/core';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  list: any = [];

  /*constructor(@Inject(UserService) service: any) {
    this.list = service.getUsers();
  }*/

  constructor(
    service: UserService,
    @Inject('LAYOUT') layout: any,
    @Inject('API_URL') apiUrl: any
  ) {
    this.list = service.getUsers();
    console.log('layout', layout);
    console.log('apiUrl', apiUrl.getUrlEndpoint());
    //console.log('service01', service01.getInformation());
  }
}
