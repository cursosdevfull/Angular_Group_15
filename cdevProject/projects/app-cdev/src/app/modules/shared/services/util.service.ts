import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';

import { ConfirmComponent } from '../components/confirm/confirm.component';
import { ExportComponent } from '../components/export/export.component';
import { Metadata } from '../interfaces/metadata.interface';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(
    private readonly dialog: MatDialog,
    private readonly bottom: MatBottomSheet
  ) {}

  showModalWindow<Entity>(
    component: any,
    panelClass: string,
    data?: Entity
  ): MatDialogRef<any> {
    return this.dialog.open(component, {
      panelClass,
      data,
      disableClose: true,
    });
  }

  showConfirm(message: string = ''): Observable<any> {
    const reference = this.dialog.open(ConfirmComponent, {
      panelClass: 'modal-confirm',
      data: null,
      disableClose: true,
    });

    if (message) {
      reference.componentInstance.message = message;
    }

    return reference.afterClosed();
  }

  showOptionsToExport(): Observable<any> {
    const reference = this.bottom.open(ExportComponent);

    return reference.afterDismissed();
  }

  exportToExcel<Entity>(
    data: Entity[],
    metadata: Metadata[],
    filename: string,
    sheetname: string
  ) {
    const dataToExport = this.fromDataToExport(data, metadata);
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);
    XLSX.utils.sheet_add_json(ws, dataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetname);
    XLSX.writeFile(wb, `${filename}.xlsx`);
  }

  private fromDataToExport<Entity>(data: Entity[], metadata: Metadata[]) {
    return data.map((item: Entity) => {
      const newRow: object = {};
      for (const prop in item) {
        const md = metadata.find((el: Metadata) => el.field === prop);
        if (md) newRow[md.title] = item[prop];
      }

      return newRow;
    });
  }
}
