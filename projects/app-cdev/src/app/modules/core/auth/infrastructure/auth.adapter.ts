import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import variables from '../../../../../assets/config/enviroment.json';
import { Auth } from '../domain/auth';
import { AuthTokens } from '../domain/auth-tokens';
import { AuthPort } from '../domain/ports/auth.port';
import { AuthTokensDto, TokensData } from './dtos/auth-tokens.dto';

@Injectable()
export class AuthAdapter implements AuthPort {
  constructor(private readonly http: HttpClient) {}

  login(auth: Auth): Observable<AuthTokens> {
    return this.http
      .post<TokensData>(`${variables.apiUrl}/v1/auth/login`, auth.properties())
      .pipe(
        map((data: TokensData) => {
          return AuthTokensDto.fromDataToDomain(data);
        })
      );
  }

  getCurrentDate() {
    return new Date();
  }

  getNewAccessToken(refreshToken: string): Observable<any> {
    return this.http
      .get<TokensData>(
        `${variables.apiUrl}/v1/auth/get-new-access-token?refreshToken=${refreshToken}`
      )
      .pipe(
        map((data: TokensData) => {
          return AuthTokensDto.fromDataToDomain(data);
        })
      );
  }
}
