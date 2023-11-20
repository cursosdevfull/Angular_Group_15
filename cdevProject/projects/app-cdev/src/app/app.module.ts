import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { PageLoginComponent } from './modules/core/pages/page-login/page-login.component';
import { ListCourseComponent } from './modules/course/infrastructure/presentation/components/list-course/list-course.component';
import { CourseModule } from './modules/course/infrastructure/presentation/course/course.module';
import { ListUserComponent } from './modules/user/infrastructure/presentation/components/list-user/list-user.component';
import { UserModule } from './modules/user/infrastructure/presentation/user.module';

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  { path: 'user', component: ListUserComponent },
  { path: 'course', component: ListCourseComponent },
];

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
