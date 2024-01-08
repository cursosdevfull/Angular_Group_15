import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';

import { ConfirmComponent } from '../components/confirm/confirm.component';
import { ExportComponent } from '../components/export/export.component';
import { Metadata } from '../components/table/metadata.interface';

declare var require: any;

const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export type TYPE_EXPORT_PDF = 'download' | 'print' | 'open';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(
    private readonly dialog: MatDialog,
    private readonly bottom: MatBottomSheet,
    private readonly notify: MatSnackBar
  ) {}

  showNotify(message: string) {
    this.notify.open(message, '', {
      duration: 3000,
    });
  }

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

  showOptionsToExport(
    data: any[],
    metadata: Metadata[],
    filename: string,
    sheetname: string
  ): Observable<any> {
    const reference = this.bottom.open(ExportComponent, {
      data: { data, metadata, filename, sheetname },
    });

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
        if (md) newRow[md.field] = item[prop];
      }

      return newRow;
    });
  }

  async exportToPDF<Entity>(
    data: Entity[],
    metadata: Metadata[],
    filename: string,
    sheetname: string,
    option: TYPE_EXPORT_PDF
  ) {
    const dataToExport = this.fromDataToExport(data, metadata);
    const imageLogo = await this.fromFileToDataUrl(
      'assets/images/logo/logo-cursos.png'
    );

    const infoFormatted = {
      pageSize: 'A4',
      pageOrientation: 'portrait',
      pageMargins: [20, 20, 20, 20],
      content: [
        this.generateHeader(imageLogo, sheetname),
        this.generateContent(dataToExport),
      ],
      footer: this.generateHeaderFooter,
      styles: this.generateStyles(),
    };

    this.generatePdf(infoFormatted, filename, option);
  }

  private generatePdf(
    infoFormatted: any,
    filename: string,
    option: TYPE_EXPORT_PDF
  ) {
    const documentGenerated = pdfMake.createPdf(infoFormatted);
    switch (option) {
      case 'download':
        documentGenerated.download(filename);
        break;
      case 'print':
        documentGenerated.print();
        break;
      case 'open':
        documentGenerated.open();
        break;
    }
  }

  private async fromFileToDataUrl(path: string) {
    const response = await fetch(path);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  }

  private generateHeader(imageLogo: unknown, title: string) {
    return {
      margin: [0, 0, 0, 15],
      table: {
        widths: [120, 'auto', 100, 'auto'],
        body: [
          [
            {
              image: imageLogo,
              width: 100,
              border: [false, false, true, false],
              borderColor: ['#000', '#000', '#000', '#000'],
              borderWidth: 1,
            },
            {
              text: [
                this.generateRow('Channel', 'headerLeft'),
                this.generateRow('Av. De la República 516', 'subHeaderLeft'),
                this.generateRow('San Isidro, Lima Perú', 'subHeaderLeft'),
                this.generateRow('Teléfono: (51-1) 611-3333', 'subHeaderLeft'),
                this.generateRow('info@channel.com', 'subHeaderLeft'),
                this.generateRow('www.channel.com', 'subHeaderLeft'),
              ],
              border: [false, false, false, false],
            },
            {
              border: [false, false, false, false],
              text: '',
            },
            {
              border: [false, false, false, false],
              text: title,
              style: 'titleReport',
            },
          ],
        ],
      },
    };
  }

  private generateRow(text: string, style: string) {
    const row: { text: string; style?: string } = { text: `${text}\n` };
    if (style) row.style = style;

    return row;
  }

  private generateStyles() {
    return {
      headerLeft: {
        fontFamily: 'Verdana',
        fontSize: 13,
        height: 16,
        color: '#3c3b40',
      },
      subHeaderLeft: {
        fontFamily: 'Verdana',
        fontSize: 10,
        height: 16,
        color: '#3c3b40',
      },
      titleReport: {
        fontFamily: 'Verdana',
        fontSize: 15,
        height: 16,
        color: '#3c3b40',
      },
      header: {
        fontFamily: 'Verdana',
        fontSize: 13,
        height: 14,
        color: '#3c3b40',
        bold: true,
      },
    };
  }

  private generateContent(data: any[]) {
    const body = data.map((el) =>
      Object.keys(el).map((prop) => this.generateRowData(el[prop]))
    );

    const rowHeaders: any = Object.keys(data[0]).map((prop) => [
      {
        border: [false, false, false, false],
        text: prop,
        style: 'header',
      },
    ]);

    const quantityColumns = rowHeaders.length;

    const widths = Array.from(Array(quantityColumns).keys()).map(
      () => Math.floor(100 / quantityColumns) + '%'
    );

    body.unshift(rowHeaders);

    return {
      margin: [0, 0, 0, 0],
      table: {
        widths,
        body,
      },
    };
  }

  private generateRowData(value: string) {
    return {
      text: value,
      border: [false, false, false, false],
    };
  }

  private generateHeaderFooter(currentPage: number, pageCount: number) {
    return [
      { text: `Página ${currentPage} de ${pageCount}`, aligment: 'center' },
    ];
  }
}
