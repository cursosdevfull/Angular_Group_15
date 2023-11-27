import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GridModule } from '../../../../config/modules/grid/grid.module';
import { SharedModule } from '../../../shared/shared.module';
import { UserCreate } from '../../application/user-create';
import { UserGetAll } from '../../application/user-get-all';
import { UserInfrastructure } from '../user.infrastructure';
import { ListUserComponent } from './components/list-user/list-user.component';

const providersApplication = [UserCreate, UserGetAll];
const providersInfrastructure = [UserInfrastructure];

@NgModule({
  declarations: [ListUserComponent],
  imports: [CommonModule, SharedModule, GridModule],
  exports: [ListUserComponent],
  providers: [...providersApplication, ...providersInfrastructure],
})
export class UserModule {}
