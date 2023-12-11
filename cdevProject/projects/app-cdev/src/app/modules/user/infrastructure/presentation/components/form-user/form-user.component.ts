import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { RoleApplication } from '../../../../../role/application/role.application';
import { Role } from '../../../../../role/domain/role';

@Component({
  selector: 'cdev-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormUserComponent {
  readonly title: string;
  fg: FormGroup;
  roles: Role[] = [];
  rolesSelected: any[] = [
    { id: '5a44eb28-ee44-4925-b5f8-83e26370309f', name: 'ADMIN' },
  ];

  dragFile = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly data: any,
    private readonly roleApplication: RoleApplication
  ) {
    this.title = data ? 'EDIT' : 'NEW';
    this.createForm();
    this.loadRoles();
  }

  createForm() {
    this.fg = new FormGroup({
      id: new FormControl(this.data?.id),
      fullname: new FormControl(this.data?.fullname, Validators.required),
      email: new FormControl(this.data?.email, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(this.data?.password, Validators.required),
      roles: new FormControl(this.data?.roles, Validators.required),
    });

    this.rolesSelected = this.data?.roles.map((el: any) => el.id);

    console.log(this.rolesSelected);

    /*
  private readonly id: string;
  private fullname: string;
  private readonly email: string;
  private password: string;
  private refreshToken: string;
  private roles: Roles;
  private gender: GENDER;
  private image: string;
    */
  }

  loadRoles() {
    this.roleApplication.list().subscribe((data) => {
      this.roles = data.map((el: any) => new Role(el.id, el.name));
    });
  }

  save() {
    console.log(this.fg.value);
  }
}
