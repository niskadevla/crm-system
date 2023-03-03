import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { catchError, Observable, of, Subscription, tap } from 'rxjs';

import { AuthFacade } from '../../shared/services/facades/auth-facade.service';
import { ROUTE_CONFIGS } from '../../shared/constants/route.constants';
import { AuthQueryParamsEnum } from '../../shared/enums/query-params.enums';
import { MaterialService } from '../../shared/services/material.service';

import { LoginFormControlsEnums } from './enums/login-form.enums';

@Component({
  standalone: true,
  selector: 'app-login-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit, OnDestroy {
  public loginForm!: FormGroup;
  public readonly loginFormControlsEnums: typeof LoginFormControlsEnums = LoginFormControlsEnums;

  private subscription: Subscription = new Subscription();

  public get emailControl(): AbstractControl {
    return this.loginForm.get(LoginFormControlsEnums.Email) as AbstractControl;
  }

  public get passwordControl(): AbstractControl {
    return this.loginForm.get(LoginFormControlsEnums.Password) as AbstractControl;
  }

  public get isEmailInvalid(): boolean {
    return this.emailControl.invalid && this.emailControl.touched;
  }

  public get isPasswordInvalid(): boolean {
    return this.passwordControl.invalid && this.passwordControl.touched;
  }

  public get isDisabled(): boolean {
    return !this.loginForm.valid || this.loginForm.disabled;
  }

  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacade,
    private router: Router,
    private route: ActivatedRoute,
    private materialService: MaterialService
  ) {}

  public ngOnInit(): void {
    this.initForm();
    this.initQueryParamsListener();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onSubmit(): void {
    this.loginForm.disable();

    this.subscription.add(
      this.authFacade
        .login(this.loginForm.value)
        .pipe(tap(this.successNavigateTo.bind(this)), catchError(this.handleError.bind(this)))
        .subscribe()
    );
  }

  private initForm() {
    this.loginForm = this.fb.group({
      [LoginFormControlsEnums.Email]: [null, [Validators.required, Validators.email]],
      [LoginFormControlsEnums.Password]: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  private initQueryParamsListener(): void {
    this.subscription.add(this.route.queryParams?.subscribe(this.showMessage.bind(this)));
  }

  private successNavigateTo(): void {
    this.router.navigate([ROUTE_CONFIGS.overview.fullPath]);
  }

  private handleError(error: any): Observable<any> {
    this.materialService.toast(error?.error?.message);
    this.loginForm.enable();

    return of('');
  }

  private showMessage(params: Params): void {
    // TODO move texts to consts and add i18
    const mapMessages: Map<string, () => void> = new Map()
      .set(AuthQueryParamsEnum.AccessDenied, () => this.materialService.toast('Please authorize in system!'))
      .set(AuthQueryParamsEnum.Registered, () => this.materialService.toast('Now we can login to the system'))
      .set(AuthQueryParamsEnum.SessionFailed, () => this.materialService.toast('Your session is expired.'));

    Object.keys(params).forEach((param: string) => mapMessages.get(param)?.());
  }
}
