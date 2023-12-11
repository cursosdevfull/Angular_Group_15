import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private readonly dialog: MatDialog) {}

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
}
