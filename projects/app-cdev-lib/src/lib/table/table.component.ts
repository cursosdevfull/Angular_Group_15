import { CurrencyPipe } from '@angular/common';
import {
  Component,
  ContentChildren,
  Input,
  QueryList,
  ViewChild,
} from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';

import { Metadata, Metadatas } from './metadata.interface';

@Component({
  selector: 'cdev-table-lib',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() metadata: Metadatas = [];
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ContentChildren(MatColumnDef, { descendants: true })
  columnsDef: QueryList<MatColumnDef>;
  columns: string[] = [];

  constructor() {}

  ngOnChanges() {
    this.columns = this.metadata.map((m) => m.field);
    this.metadata.forEach((m: Metadata) => {
      if (m.transform) {
        let obj;
        if (m.transform.name === 'currency') {
          obj = new CurrencyPipe('en-US');
          console.log('obj: ', obj);
        }
        this.data.forEach((d: any) => {
          d[m.field] = obj.transform(d[m.field], m.transform?.parameter); //this[m.transform.name](d[m.field], m.transform.parameter);
        });
      }
    });
    this.ngAfterContentInit();
  }

  ngAfterContentInit() {
    if (!this.columnsDef || this.data.length === 0) return;

    this.columnsDef.forEach((columnDef: MatColumnDef) => {
      this.columns.push(columnDef.name);
      this.table.addColumnDef(columnDef);
    });
  }
}

// const table = document.querySelector('table');
