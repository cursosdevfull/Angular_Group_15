import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'cdev-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent {
  options: AnimationOptions = {
    path: '/assets/lotties/animation.json',
  };

  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '80%',
    maxHeight: '100vh',
  };
}

interface User {
  name: string;
  lastname: string;
}

const user: Partial<User> = { name: 'Carlos' };
