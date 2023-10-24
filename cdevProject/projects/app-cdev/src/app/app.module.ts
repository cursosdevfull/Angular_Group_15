import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoNovelComponent } from './cdev-info-novel/cdev-info-novel.component';
import { MyComponent } from './myComponent/my-component.component';
import { NovelComponent } from './novel/novel.component';

@NgModule({
  declarations: [AppComponent, MyComponent, NovelComponent, InfoNovelComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [NovelComponent, MyComponent],
})
export class AppModule {}
