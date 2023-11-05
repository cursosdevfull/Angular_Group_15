import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Environment } from './core/config/environment';
import { UserService } from './services/user.service';
import { ShowUsersComponent } from './show-users/show-users.component';

class MyService {}

export const myService = new MyService();

class Development {
  getUrlEndpoint() {
    return 'http://dev.myapp.com';
  }
}

class Production {
  getUrlEndpoint() {
    return 'http://myapp.com';
  }
}

@NgModule({
  declarations: [AppComponent, ShowUsersComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: 'USER_SERVICE',
      //useClass: UserService,
      useExisting: UserService,
    },
    {
      provide: myService,
      useClass: UserService,
    },
    {
      provide: MyService,
      useClass: UserService,
    },
    /*{
      provide: UserService,
      useClass: UserService,
    },*/
    UserService,
    {
      provide: 'LAYOUT',
      useValue: {
        showMenu: true,
        showFooter: true,
        showHeader: true,
      },
    },
    {
      provide: 'ENVIRONMENT',
      useClass: Environment,
    },
    {
      provide: 'API_URL',
      useFactory: (env: any) => {
        return env.getEnvironment() === 'PROD'
          ? new Production()
          : new Development();
      },
      deps: ['ENVIRONMENT'],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
