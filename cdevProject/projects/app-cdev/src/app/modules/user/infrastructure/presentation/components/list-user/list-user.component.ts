import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { LayoutService } from '../../../../../../config/modules/layout/layout.service';
import { UserCreate } from '../../../../application/user-create';
import { UserGetAll } from '../../../../application/user-get-all';
import { User } from '../../../../domain/roots/user';

@Component({
  selector: 'cdev-list-user',
  templateUrl: './list-user.component.html',
})
export class ListUserComponent {
  data = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Jane', age: 24 },
    { id: 3, name: 'Susan', age: 16 },
    { id: 4, name: 'Chris', age: 55 },
    { id: 5, name: 'Dan', age: 40 },
    { id: 6, name: 'Mike', age: 30 },
    { id: 7, name: 'Tom', age: 18 },
    { id: 8, name: 'Kate', age: 17 },
    { id: 9, name: 'Ed', age: 28 },
    { id: 10, name: 'Steve', age: 60 },
  ];

  metadata = [
    { field: 'id', label: 'ID' },
    { field: 'name', label: 'Nombre' },
    { field: 'age', label: 'Edad' },
  ];

  users: User[] = [];
  subject = new Subject<void>();

  flexDirection = 'row';

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(
    userCreate: UserCreate,
    private readonly userGetAll: UserGetAll,
    private readonly layoutService: LayoutService,
    breakpointObserver: BreakpointObserver
  ) {
    layoutService.configuration = { showMenu: true, showHeader: true };
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            const value = this.displayNameMap.get(query) ?? 'Unknown';
            console.log('value', value);
            value === 'XSmall' || value === 'Small'
              ? (this.flexDirection = 'column')
              : (this.flexDirection = 'row');
          }
        }
      });
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
