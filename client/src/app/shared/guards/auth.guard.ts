import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';

import { AuthService } from '../services/api-services/auth.service';
import { ROUTE_CONFIGS } from '../constants/route.constants';
import { AuthQueryParamsEnum } from '../enums/query-params.enums';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {
  }

  public canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.isAuthenticated
        ? of(true)
        : this.navigateToLogin()
  }

  public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(childRoute, state);
  }

  private navigateToLogin(): Observable<boolean> {
    this.router.navigate([ROUTE_CONFIGS.login.fullPath], {
      queryParams: {
        [AuthQueryParamsEnum.AccessDenied]: true
      }
    });

    return of(false);
  }
}
