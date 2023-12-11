import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { MaterialModule } from '../material/material.module';
import { ContainerComponent } from './components/container/container.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PhotoComponent } from './components/photo/photo.component';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';
import { UploadDirective } from './directives/upload.directive';
import { RecortarPipe } from './pipes/recortar.pipe';

@NgModule({
  declarations: [
    TitleComponent,
    TableComponent,
    ContainerComponent,
    PaginatorComponent,
    RecortarPipe,
    PhotoComponent,
    UploadDirective,
  ],
  imports: [CommonModule, MaterialModule, NgScrollbarModule],
  exports: [
    TitleComponent,
    TableComponent,
    ContainerComponent,
    NgScrollbarModule,
    PaginatorComponent,
    RecortarPipe,
    PhotoComponent,
  ],
})
export class SharedModule {}
