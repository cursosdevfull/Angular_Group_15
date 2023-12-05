import { Observable } from 'rxjs';

import { Auth } from '../auth';
import { AuthTokens } from '../auth-tokens';

export interface AuthPort {
  login(auth: Auth): Observable<AuthTokens>;
  getNewAccessToken(refreshToken: string): Observable<AuthTokens>;
}
