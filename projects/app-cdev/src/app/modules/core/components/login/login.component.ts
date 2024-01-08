import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthApplication } from '../../auth/application/auth.application';
import { Auth } from '../../auth/domain/auth';

@Component({
  selector: 'cdev-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  fg: FormGroup;
  capsLockOn: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly application: AuthApplication
  ) {
    this.createFormLogin();
  }

  createFormLogin() {
    this.fg = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(
            /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
          ) /*this.validatorEmail*/,
          this.validatorDomainEmail('gmail.com', 'hotmail.com'),
        ]),
        password: new FormControl('', Validators.required),
        //confirmPassword: new FormControl('', Validators.required),
      }
      //this.validatorPasswordAndConfirm
    );
  }

  validatorPasswordAndConfirm(fg: AbstractControl) {
    if (!fg.get('password') || !fg.get('confirmPassword')) return null;

    const password = fg.get('password')?.value;
    const confirmPassword = fg.get('confirmPassword')?.value;

    if (password === confirmPassword) return null;

    return { passwordAndConfirm: true };
  }

  validatorEmail(control: AbstractControl) {
    const email = control.value;
    if (!email) return null;

    if (email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)) {
      return null;
    }

    return { emailFormat: true };
  }

  validatorDomainEmail(...filterDomains: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const email = control.value;
      if (!email) return null;

      const domain = email.split('@')[1];
      if (!filterDomains.includes(domain)) return null;

      return { filterDomains };
    };
  }

  login() {
    const { email, password } = this.fg.value;
    const auth = new Auth(email, password);

    this.application.login(auth);

    //if (this.fg.valid) {
    //this.router.navigate(['/course']);
    //}
  }

  // onFocus(event: FocusEvent) {
  //   if (this.capsLockOn) {
  //     console.log('Caps Lock is ON');
  //   } else {
  //     console.log('Caps Lock is OFF');
  //   }
  // }
}
