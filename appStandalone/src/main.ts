// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ApplicationConfig } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { LoggerService } from './app/core/services/logger.service';

// import { AppModule } from './app/app.module';
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

const configuration: ApplicationConfig = {
  providers: [LoggerService, provideRouter(routes)],
};

bootstrapApplication(AppComponent, configuration).catch(console.log);
