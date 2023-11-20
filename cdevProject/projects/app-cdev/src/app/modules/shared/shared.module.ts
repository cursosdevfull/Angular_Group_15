import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { TitleComponent } from './components/title/title.component';



@NgModule({
  declarations: [
    TitleComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    TitleComponent
  ]
})
export class SharedModule { }
