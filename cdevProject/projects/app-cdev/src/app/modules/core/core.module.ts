import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { LottieModule } from 'ngx-lottie';

import { AuthApplication } from './auth/application/auth.application';
import { AuthAdapter } from './auth/infrastructure/auth.adapter';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { CapsLockDirective } from './directives/caps-lock.directive';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { StorageApplication } from './storage/application/storage.application';
import { StorageAdapter } from './storage/infrastructure/storage.adapter';

export function playerFactory() {
  return import('lottie-web');
}

const application = [AuthApplication, StorageApplication];
const infrastructure = [AuthAdapter, StorageAdapter];

@NgModule({
  declarations: [
    HeaderComponent,
    PageLoginComponent,
    LoginComponent,
    CapsLockDirective,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    LottieModule.forRoot({ player: playerFactory }),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [HeaderComponent, MenuComponent],
  providers: [...application, ...infrastructure],
})
export class CoreModule {}
