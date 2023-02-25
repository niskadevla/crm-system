import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, tap } from 'rxjs';

import { LocalStorageService } from '../local-storage.service';
import { IUser } from '../../models/entities.models';
import { urls } from '../../constants/urls.constants';
import { IToken } from '../../models/auth.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: IToken | null = null;

  public get isAuthenticated(): boolean {
    return !!this.token;
  }

  constructor(private http: HttpClient, private storageService: LocalStorageService) {
  }

  public register(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(urls.register, user);
  }

  public login(user: IUser): Observable<IToken> {
    return this.http.post<IToken>(urls.login, user)
        .pipe(
            tap((token: IToken) => {
              this.storageService.setItem('auth-token', token);
              this.setToken(token);
            })
        )
  }

  public logout() {
    this.setToken(null);
    this.storageService.clearStorage();
  }

  public getToken(): IToken | null {
    return this.token;
  }

  public setToken(token: IToken | null) {
    this.token = token;
  }
}
