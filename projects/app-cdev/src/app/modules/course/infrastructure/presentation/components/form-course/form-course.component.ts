import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'cdev-form-course',
  templateUrl: './form-course.component.html',
  styleUrls: ['./form-course.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormCourseComponent {
  readonly title: string;
  fg: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) readonly data: any,
    private readonly reference: MatDialogRef<FormCourseComponent>
  ) {
    this.title = data ? 'EDIT' : 'NEW';
    this.createForm();
  }

  createForm() {
    this.fg = new FormGroup({
      id: new FormControl(this.data?.id),
      title: new FormControl(this.data?.title, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  save() {
    const id = this.fg.value.id;
    const info = this.fg.value;

    delete info.id;
    this.reference.close({ id, info });
  }
}
