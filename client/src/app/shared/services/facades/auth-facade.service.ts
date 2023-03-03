import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../api-services/auth.service';
import { IUser } from '../../models/entities.models';
import { IToken } from '../../models/auth.models';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  constructor(private authApi: AuthService, private storageService: LocalStorageService) {}

  public login(user: IUser): Observable<IToken> {
    return this.authApi.login(user);
  }

  public register(user: IUser): Observable<IUser> {
    return this.authApi.register(user);
  }

  public initToken(): void {
    const token: IToken | null = this.storageService.getItem<IToken>('auth-token');

    this.authApi.setToken(token);
  }

  public logout(): void {
    this.authApi.logout();
  }
}
