import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { UserCreate } from '../../../../application/user-create';
import { UserGetAll } from '../../../../application/user-get-all';
import { User } from '../../../../domain/roots/user';

@Component({
  selector: 'cdev-list-user',
  templateUrl: './list-user.component.html',
})
export class ListUserComponent {
  users: User[] = [];
  subject = new Subject<void>();

  constructor(userCreate: UserCreate, private readonly userGetAll: UserGetAll) {
    this.loadUsers();
  }

  loadUsers() {
    // this.userGetAll.execute().then((users) => {
    //   this.users = users;
    // });
    // this.userGetAll.execute().subscribe((users) => {
    //   this.users = users;
    // });

    this.userGetAll
      .execute()
      .pipe(takeUntil(this.subject))
      .subscribe({
        next: (users) => {
          this.users = users;
        },
      });
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.subject.next();
    this.subject.unsubscribe();
  }
}
