import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { takeUntil } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

import { LayoutService } from '../../../../../../config/modules/layout/layout.service';
import { BaseComponent } from '../../../../../core/classes/base-component';
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
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent extends BaseComponent<User> {
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
    super();
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
    this.userByPage
      .execute(page, this.pageSize)
      .pipe(takeUntil(this.subject))
      .subscribe((data) => {
        this.data = data.data;
        this.quantityRecords = data.total;
      });
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
    reference
      .afterClosed()
      .pipe(takeUntil(this.subject))
      .subscribe((data) => {
        if (!data) return;

        if (data.id) {
          const user = new User({ ...data.info, id: data.id });
          this.userUpdate
            .execute(user)
            .pipe(takeUntil(this.subject))
            .subscribe((data) => {
              this.utilService.showNotify('Successfully updated');
              this.loadPage(0);
            });
        } else {
          const user = new User({ ...data.info, id: uuidv4() });
          this.userCreate
            .execute(user)
            .pipe(takeUntil(this.subject))
            .subscribe((data) => {
              this.utilService.showNotify('Successfully created');
              this.loadPage(0);
            });
        }
      });
  }

  delete(row: any) {
    this.utilService
      .showConfirm('¿Está seguro de eliminar el registro?')
      .pipe(takeUntil(this.subject))
      .subscribe((data) => {
        if (!data) return;
        this.userDelete.execute(row.id).subscribe((data) => {
          this.loadPage(0);
        });
      });
  }

  showOptionsToExport() {
    this.userGetAll
      .execute()
      .pipe(takeUntil(this.subject))
      .subscribe((data) => {
        this.utilService.showOptionsToExport(
          data,
          this.metadata,
          'users',
          'List of users'
        );
      });
  }
}
