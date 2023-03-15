import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { RegisterFormControlsEnums } from '../enums/register-form.enums';

export const comparePasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password: string = control.get(RegisterFormControlsEnums.Password)?.value;
  const comparedPassword: string = control.get(RegisterFormControlsEnums.ComparedPassword)?.value;

  return password === comparedPassword ? null : { notMatch: true }
}