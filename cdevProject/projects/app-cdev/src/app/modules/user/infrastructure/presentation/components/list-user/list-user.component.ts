import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';

import { LayoutService } from '../../../../../../config/modules/layout/layout.service';
import { Metadatas } from '../../../../../shared/components/table/metadata.interface';
import { UtilService } from '../../../../../shared/services/util.service';
import { UserByPage } from '../../../../application/user-by-page';
import { UserCreate } from '../../../../application/user-create';
import { UserGetAll } from '../../../../application/user-get-all';
import { User } from '../../../../domain/roots/user';
import { FormUserComponent } from '../form-user/form-user.component';

@Component({
  selector: 'cdev-list-user',
  templateUrl: './list-user.component.html',
})
export class ListUserComponent {
  users: User[] = [];
  subject = new Subject<void>();

  flexDirection = 'row';

  pageSize = 30;

  quantityRecords = 0;

  data: Array<User> = [];

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  metadata: Metadatas = [
    { field: 'fullname', label: 'Nombre' },
    {
      field: 'email',
      label: 'Correo',
    },
    //{ field: 'duration', label: 'Duración' },
  ];

  constructor(
    userCreate: UserCreate,
    private readonly userGetAll: UserGetAll,
    private readonly userByPage: UserByPage,
    private readonly layoutService: LayoutService,
    private readonly utilService: UtilService,
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
    this.loadPage(0);
  }

  loadPage(page: number) {
    this.userByPage.execute(page, this.pageSize).subscribe((data) => {
      this.data = data.data;
      this.quantityRecords = data.total;
    });
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.subject.next();
    this.subject.unsubscribe();
  }

  changePage(page: number) {
    this.loadPage(page);
  }

  openModal(data?: User) {
    this.utilService.showModalWindow(FormUserComponent, 'modal-user', data);
  }
}
