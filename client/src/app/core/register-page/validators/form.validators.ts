import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { RegisterFormControlsEnums } from '../enums/register-form.enums';

export const comparePasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get(RegisterFormControlsEnums.Password)?.value;
  const comparedPassword = control.get(RegisterFormControlsEnums.ComparedPassword)?.value;

  return password === comparedPassword ? null : { notMatch: true }
}