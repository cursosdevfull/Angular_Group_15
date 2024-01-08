import { Component, Inject } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

import { TYPE_EXPORT_PDF, UtilService } from '../../services/util.service';
import { Metadata } from '../table/metadata.interface';

@Component({
  selector: 'cdev-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css'],
})
export class ExportComponent {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA)
    private readonly info: {
      data: any;
      metadata: Metadata[];
      filename: string;
      sheetname: string;
    },
    private readonly utilsService: UtilService,
    private readonly reference: MatBottomSheetRef<ExportComponent>
  ) {}

  exportToExcel() {
    this.reference.dismiss();
    this.utilsService.exportToExcel(
      this.info.data,
      this.info.metadata,
      this.info.filename,
      this.info.sheetname
    );
  }

  exportToPDF(option: TYPE_EXPORT_PDF) {
    this.reference.dismiss();
    this.utilsService.exportToPDF(
      this.info.data,
      this.info.metadata,
      this.info.filename,
      this.info.sheetname,
      option
    );
  }
}
