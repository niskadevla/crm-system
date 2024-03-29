import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { catchError, Observable, of, tap } from 'rxjs';

import { AuthFacade } from '../../shared/services/facades/auth-facade.service';
import { ROUTE_CONFIGS } from '../../shared/constants/route.constants';
import { AuthQueryParamsEnum } from '../../shared/enums/query-params.enums';
import { MaterialService } from '../../shared/services/material.service';
import { UntilDestroy, untilDestroyed } from '../../shared/decorators/untilDestroy.decorator';

import { RegisterFormControlsEnums } from './enums/register-form.enums';
import { comparePasswordValidator } from './validators/form.validators';

@UntilDestroy
@Component({
  standalone: true,
  selector: 'app-register-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterPageComponent implements OnInit {
  public registerForm!: FormGroup;
  public readonly registerFormControlsEnums: typeof RegisterFormControlsEnums = RegisterFormControlsEnums;

  public get emailControl(): AbstractControl {
    return this.registerForm.get(RegisterFormControlsEnums.Email) as AbstractControl;
  }

  public get passwordControl(): AbstractControl {
    return this.registerForm.get(RegisterFormControlsEnums.Password) as AbstractControl;
  }

  public get comparePasswordControl(): AbstractControl {
    return this.registerForm.get(RegisterFormControlsEnums.ComparedPassword) as AbstractControl;
  }

  public get isEmailInvalid(): boolean {
    return this.emailControl.invalid && this.emailControl.touched;
  }

  public get isPasswordInvalid(): boolean {
    return this.passwordControl.invalid && this.passwordControl.touched;
  }

  public get isDisabled(): boolean {
    return !this.registerForm.valid || this.registerForm.disabled;
  }

  public get isComparePasswordInvalid(): boolean {
    return this.registerForm.invalid && this.comparePasswordControl.touched && this.passwordControl.touched;
  }

  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacade,
    private router: Router,
    private materialService: MaterialService
  ) {}

  public ngOnInit() {
    this.initForm();
  }

  public onSubmit() {
    this.registerForm.disable();

    this.authFacade
      .register(this.registerForm.value)
      .pipe(tap(this.successNavigateTo.bind(this)), catchError(this.handleError.bind(this)), untilDestroyed(this))
      .subscribe();
  }

  private initForm() {
    this.registerForm = this.fb.group(
      {
        [RegisterFormControlsEnums.Email]: [null, [Validators.required, Validators.email]],
        [RegisterFormControlsEnums.Password]: [null, [Validators.required, Validators.minLength(6)]],
        [RegisterFormControlsEnums.ComparedPassword]: [null, [Validators.required]]
      },
      { validators: comparePasswordValidator }
    );
  }

  private successNavigateTo(): void {
    this.router.navigate([ROUTE_CONFIGS.login.fullPath], {
      queryParams: {
        [AuthQueryParamsEnum.Registered]: true
      }
    });
  }

  private handleError(error: any): Observable<any> {
    this.materialService.toast(error.error.message);
    this.registerForm.enable();

    return of('');
  }
}
