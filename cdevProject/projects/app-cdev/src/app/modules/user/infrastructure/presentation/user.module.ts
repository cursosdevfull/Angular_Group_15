import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { GridModule } from '../../../../config/modules/grid/grid.module';
import { MaterialModule } from '../../../material/material.module';
import { SharedModule } from '../../../shared/shared.module';
import { UserByPage } from '../../application/user-by-page';
import { UserCreate } from '../../application/user-create';
import { UserDelete } from '../../application/user-delete';
import { UserGetAll } from '../../application/user-get-all';
import { UserUpdate } from '../../application/user-update';
import { UserInfrastructure } from '../user.infrastructure';
import { FormUserComponent } from './components/form-user/form-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';

const providersApplication = [
  UserCreate,
  UserGetAll,
  UserByPage,
  UserUpdate,
  UserDelete,
];
const providersInfrastructure = [UserInfrastructure];

@NgModule({
  declarations: [ListUserComponent, FormUserComponent],
  imports: [
    CommonModule,
    SharedModule,
    GridModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [ListUserComponent],
  providers: [...providersApplication, ...providersInfrastructure],
})
export class UserModule {}
