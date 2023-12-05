import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { GridModule } from '../../../../config/modules/grid/grid.module';
import { SharedModule } from '../../../shared/shared.module';
import { UserByPage } from '../../application/user-by-page';
import { UserCreate } from '../../application/user-create';
import { UserGetAll } from '../../application/user-get-all';
import { UserInfrastructure } from '../user.infrastructure';
import { ListUserComponent } from './components/list-user/list-user.component';

const providersApplication = [UserCreate, UserGetAll, UserByPage];
const providersInfrastructure = [UserInfrastructure];

@NgModule({
  declarations: [ListUserComponent],
  imports: [
    CommonModule,
    SharedModule,
    GridModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  exports: [ListUserComponent],
  providers: [...providersApplication, ...providersInfrastructure],
})
export class UserModule {}
