import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Paginator } from './config/classes/paginator';
import { ILayout } from './config/modules/layout/layout.interface';
import { LayoutModule } from './config/modules/layout/layout.module';
import { CoreModule } from './modules/core/core.module';
import { TokenInterceptor } from './modules/shared/interceptors/token.interceptor';
import { IconsService } from './modules/shared/services/icons.service';

const layoutConfig: ILayout = { showHeader: false, showMenu: false };

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    CoreModule,
    LayoutModule.forRoot(layoutConfig),
    AppRoutingModule,
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: Paginator,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private readonly iconService: IconsService) {}
}
