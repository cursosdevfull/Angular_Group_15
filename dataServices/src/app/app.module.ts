import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookService } from './book.service';
import { LoggerService } from './logger.service';
import { MatPaginatorIntlES } from './paginator-es.service';
import { MatPaginatorIntl } from './paginator.service';
import { ShowUsersComponent } from './show-users/show-users.component';
import { UserService } from './user.service';

class UsuarioService {}

export const serviceUser = new UsuarioService();
export const serviceToken = new InjectionToken('serviceToken');
export const newServiceToken = new InjectionToken('newServiceToken');

export class LayoutService {
  constructor(private layout: { [k: string]: boolean }) {}

  useFullScreen() {
    return 'Mode full screen';
  }

  showParameters() {
    console.log('Layout Parameters', this.layout);
  }
}

@NgModule({
  declarations: [AppComponent, ShowUsersComponent],
  imports: [BrowserModule],
  providers: [
    //{ provide: UserService, useClass: UserService },
    UserService,
    { provide: 'USER_SERVICE', useClass: UserService },
    { provide: UsuarioService, useClass: UserService },
    { provide: serviceUser, useClass: UserService },
    { provide: serviceToken, useClass: UserService },
    { provide: 'LAYOUT', useValue: { showMenu: true, showHeader: true } },
    {
      provide: 'CONFIG_LAYOUT',
      useFactory: (layout: { [k: string]: boolean }) =>
        new LayoutService(layout),
      deps: ['LAYOUT'],
    },
    {
      provide: newServiceToken,
      useExisting: serviceUser,
    },
    BookService,
    //{provide: BookService, useClass: BookService},
    LoggerService,
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlES },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
