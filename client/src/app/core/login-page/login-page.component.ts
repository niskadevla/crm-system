import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginFormControlsEnums } from './enums/login-form.enums';

@Component({
  standalone: true,
  selector: 'app-login-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent implements OnInit {

  public loginForm!: FormGroup;
  public readonly loginFormControlsEnums = LoginFormControlsEnums;

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

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit() {
    this.initForm();
  }

  public onSubmit() {
  }

  private initForm() {
    this.loginForm = this.fb.group({
      [LoginFormControlsEnums.Email]: [null, [Validators.required, Validators.email]],
      [LoginFormControlsEnums.Password]: [null, [Validators.required, Validators.minLength(6)]]
    });
  }
}
