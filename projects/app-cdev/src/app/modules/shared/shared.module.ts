import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { WebcamModule } from 'ngx-webcam';

import { MaterialModule } from '../material/material.module';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ContainerComponent } from './components/container/container.component';
import { ExportComponent } from './components/export/export.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PhotoComponent } from './components/photo/photo.component';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';
import { UploadDirective } from './directives/upload.directive';
import { RecortarPipe } from './pipes/recortar.pipe';
import { RolesAllowedDirective } from './directives/roles-allowed.directive';

@NgModule({
  declarations: [
    TitleComponent,
    TableComponent,
    ContainerComponent,
    PaginatorComponent,
    RecortarPipe,
    PhotoComponent,
    UploadDirective,
    ConfirmComponent,
    ExportComponent,
    RolesAllowedDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgScrollbarModule,
    WebcamModule,
    MatSlideToggleModule,
    MatBottomSheetModule,
    MatListModule,
  ],
  exports: [
    TitleComponent,
    TableComponent,
    ContainerComponent,
    NgScrollbarModule,
    PaginatorComponent,
    RecortarPipe,
    PhotoComponent,
    RolesAllowedDirective,
  ],
})
export class SharedModule {}
