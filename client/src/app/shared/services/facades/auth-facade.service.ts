import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../api-services/auth.service';
import { IUser } from '../../models/entities.models';
import { IToken } from '../../models/auth.models';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {

  constructor(private authApi: AuthService) { }

  public login(user: IUser):  Observable<IToken> {
    return this.authApi.login(user);
  }
}
