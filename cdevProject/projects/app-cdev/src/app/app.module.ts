import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListCourseComponent } from './modules/course/infrastructure/presentation/components/list-course/list-course.component';
import { CourseModule } from './modules/course/infrastructure/presentation/course/course.module';
import { ListUserComponent } from './modules/user/infrastructure/presentation/components/list-user/list-user.component';
import { UserModule } from './modules/user/infrastructure/presentation/user.module';

const routes: Routes = [
  { path: 'user', component: ListUserComponent },
  { path: 'course', component: ListCourseComponent },
];

// class PathModule {
//   static forRoot(parameter: any) {
//     return this
//   }
// }

// const path = PathModule.forRoot(routes )

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UserModule,
    CourseModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
