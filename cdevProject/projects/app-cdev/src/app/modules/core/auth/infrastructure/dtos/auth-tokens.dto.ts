import { AuthTokens } from '../../domain/auth-tokens';

export interface TokensData {
  token: string;
  refresh: string;
}

export class AuthTokensDto {
  static fromDataToDomain(data: TokensData): AuthTokens {
    if (!data.token || !data.refresh) throw new Error('Invalid data');
    const authTokens = new AuthTokens();
    authTokens.accessToken = data.token;
    authTokens.refreshToken = data.refresh;
    console.log('authTokens', authTokens);

    return authTokens;
  }

  static fromDomainToData() {}
}
