import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { catchError, mergeMap, Observable, throwError } from 'rxjs';

import { AuthApplication } from '../../core/auth/application/auth.application';
import { AuthTokens } from '../../core/auth/domain/auth-tokens';
import { StorageAdapter } from '../../core/storage/infrastructure/storage.adapter';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private readonly storage: StorageAdapter,
    private readonly injector: Injector
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.storage.get('accessToken');

    const cloneRequest = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${token}`),
    });

    return next.handle(cloneRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
          return throwError(() => new Error(errorMessage));
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          return this.handleErrorServer(error, req, next);
        }
      })
    );
  }

  handleErrorServer(
    error: HttpErrorResponse,
    req: HttpRequest<any>,
    next: HttpHandler
  ) {
    const auth = this.injector.get(AuthApplication);

    if (error.status === 401) {
      auth.logout();
    } else if (error.status === 409) {
      const refreshToken = this.storage.get('refreshToken');

      return auth.getNewAccessToken(refreshToken as string).pipe(
        mergeMap((tokens: AuthTokens) => {
          this.storage.save('accessToken', tokens.accessToken);
          this.storage.save('refreshToken', tokens.refreshToken);

          const cloneRequest = req.clone({
            headers: req.headers.append(
              'Authorization',
              `Bearer ${tokens.accessToken}`
            ),
          });

          return next.handle(cloneRequest);

          return next.handle(cloneRequest);
        })
      );
    }

    return throwError(() => new Error(error.message));
  }
}
