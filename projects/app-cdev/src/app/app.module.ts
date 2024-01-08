import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Paginator } from './config/classes/paginator';
import { ILayout } from './config/modules/layout/layout.interface';
import { LayoutModule } from './config/modules/layout/layout.module';
import { CoreModule } from './modules/core/core.module';
import { PageLoginComponent } from './modules/core/pages/page-login/page-login.component';
import { ListCourseComponent } from './modules/course/infrastructure/presentation/components/list-course/list-course.component';
import { CourseModule } from './modules/course/infrastructure/presentation/course/course.module';
import { TokenInterceptor } from './modules/shared/interceptors/token.interceptor';
import { IconsService } from './modules/shared/services/icons.service';
import { ListUserComponent } from './modules/user/infrastructure/presentation/components/list-user/list-user.component';
import { UserModule } from './modules/user/infrastructure/presentation/user.module';

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  { path: 'user', component: ListUserComponent },
  { path: 'course', component: ListCourseComponent },
];

const layoutConfig: ILayout = { showHeader: false, showMenu: false };

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UserModule,
    CourseModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSidenavModule,
    CoreModule,
    LayoutModule.forRoot(layoutConfig),
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: Paginator,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private readonly iconService: IconsService) {}
}
