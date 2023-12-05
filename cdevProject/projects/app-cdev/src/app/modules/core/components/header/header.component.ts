import { Component } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

import { StorageApplication } from '../../storage/application/storage.application';

@Component({
  selector: 'cdev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  username: string;

  constructor(private readonly storage: StorageApplication) {
    const accessToken = this.storage.get('accessToken') ?? '';
    const payload: { [k: string]: number | string | Array<any> } =
      jwtDecode(accessToken);
    this.username = payload['fullname'] as string;
  }
}
