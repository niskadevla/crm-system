import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';

import { catchError, Observable, throwError } from 'rxjs';

import { AuthService } from '../services/api-services/auth.service';
import { ROUTE_CONFIGS } from '../constants/route.constants';
import { AuthQueryParamsEnum } from '../enums/query-params.enums';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.authService.isAuthenticated) {
      request = request.clone({
        setHeaders: {
          Authorization: this.authService.getToken()?.token ?? ''
        }
      });
    }

    return next.handle(request)
        .pipe(
            catchError(this.handleAuthError.bind(this))
        );
  }

  private handleAuthError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 401) {
      this.navigateToLogin();
    }

    return throwError(() => error);
  }

  private navigateToLogin(): void {
    this.router.navigate([ROUTE_CONFIGS.login.fullPath], {
      queryParams: {
        [AuthQueryParamsEnum.SessionFailed]: true
      }
    })
  }
}
