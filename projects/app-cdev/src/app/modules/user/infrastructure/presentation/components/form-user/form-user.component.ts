import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ImageApplication } from 'projects/app-cdev/src/app/modules/core/images/application/image.application';

import environment from '../../../../../../../assets/config/enviroment.json';
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
  listRoles: Role[] = [];
  rolesSelected: string = '';

  dragFile = false;
  formControlRoles!: FormControl;
  photoToShow: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) readonly data: any,
    private readonly roleApplication: RoleApplication,
    private readonly applicationImage: ImageApplication,
    private readonly reference: MatDialogRef<FormUserComponent>
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
      roles: new FormControl([], Validators.required),
      gender: new FormControl(this.data?.gender),
    });

    if (this.data) {
      this.fg.addControl('image', new FormControl());
      this.fg.addControl('password', new FormControl());
      this.photoToShow = this.data.image;
    } else {
      this.fg.addControl(
        'password',
        new FormControl(null, Validators.required)
      );
      this.fg.addControl('image', new FormControl(null, Validators.required));
    }

    this.formControlRoles = this.fg.get('roles') as FormControl;
  }

  loadRoles() {
    this.roleApplication.list().subscribe((data) => {
      this.listRoles = data.map((el: any) => new Role(el.id, el.name));
      const value = this.listRoles.filter((el: Role) =>
        this.data?.roles.map((el: any) => el.id).includes(el.properties().id)
      );
      this.fg?.get('roles')?.setValue(value.map((el: any) => el.name));
    });
  }

  transformRolesInIds(roles: string[]): { id: string }[] {
    return this.listRoles
      .filter((el: Role) => roles.includes(el.properties().name))
      .map((el: Role) => ({ id: el.properties().id }));
  }

  save() {
    this.applicationImage.uploadFile(this.fg.value.image).subscribe((data) => {
      const id = this.fg.value.id;
      const info = this.fg.value;
      info.image = environment.imageUrl + data;
      info.roles = this.transformRolesInIds(info.roles);

      delete info.id;
      if (!info.password) delete info.password;
      if (!info.image) delete info.image;
      if (!info.gender) delete info.gender;
      this.reference.close({ id, info });
    });
  }
}
