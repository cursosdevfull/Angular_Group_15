import { ModuleWithProviders, NgModule } from '@angular/core';

import { ILayout } from './layout.interface';
import { LayoutService } from './layout.service';
import { LAYOUT_TOKEN } from './layout.token';

@NgModule()
export class LayoutModule {
  static forRoot(config: ILayout): ModuleWithProviders<LayoutModule> {
    return {
      ngModule: LayoutModule,
      providers: [{ provide: LAYOUT_TOKEN, useValue: config }, LayoutService],
    };
  }
}

//LayoutModule.forRoot();
