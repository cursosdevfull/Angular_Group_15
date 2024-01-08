import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [MatTableModule, CommonModule],
  exports: [TableComponent],
  providers: [],
})
export class TableModule {}
