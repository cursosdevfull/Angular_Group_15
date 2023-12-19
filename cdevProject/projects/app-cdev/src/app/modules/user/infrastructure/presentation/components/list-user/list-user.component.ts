import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { LayoutService } from '../../../../../../config/modules/layout/layout.service';
import { Metadatas } from '../../../../../shared/components/table/metadata.interface';
import { UtilService } from '../../../../../shared/services/util.service';
import { UserByPage } from '../../../../application/user-by-page';
import { UserCreate } from '../../../../application/user-create';
import { UserDelete } from '../../../../application/user-delete';
import { UserGetAll } from '../../../../application/user-get-all';
import { UserUpdate } from '../../../../application/user-update';
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
    private readonly userGetAll: UserGetAll,
    private readonly userByPage: UserByPage,
    private readonly layoutService: LayoutService,
    private readonly utilService: UtilService,
    private readonly userCreate: UserCreate,
    private readonly userUpdate: UserUpdate,
    private readonly userDelete: UserDelete,
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
    const reference = this.utilService.showModalWindow(
      FormUserComponent,
      'modal-user',
      data
    );
    reference.afterClosed().subscribe((data) => {
      if (!data) return;

      if (data.id) {
        const user = new User({ ...data.info, id: data.id });
        this.userUpdate.execute(user).subscribe((data) => {
          this.loadPage(0);
        });
      } else {
        const user = new User({ ...data.info, id: uuidv4() });
        this.userCreate.execute(user).subscribe((data) => {
          this.loadPage(0);
        });
      }
    });
  }

  delete(row: any) {
    this.utilService
      .showConfirm('¿Está seguro de eliminar el registro?')
      .subscribe((data) => {
        if (!data) return;
        this.userDelete.execute(row.id).subscribe((data) => {
          this.loadPage(0);
        });
      });
  }

  showOptionsToExport() {
    this.utilService.showOptionsToExport();
  }
}
