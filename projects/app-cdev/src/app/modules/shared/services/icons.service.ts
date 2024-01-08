import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export interface Icon {
  name: string;
  path: string;
}

export type Icons = Icon[];

@Injectable({ providedIn: 'root' })
export class IconsService {
  private listIcons: Icons = [
    {
      name: 'excel',
      path: 'assets/images/iconos/excel.svg',
    },
    {
      name: 'pdf',
      path: 'assets/images/iconos/pdf.svg',
    },
  ];

  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer
  ) {
    for (const icon of this.listIcons) {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    }
  }
}
