import { Injectable } from '@angular/core';

declare var M: any;

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  public toast(message: string) {
    M.toast({html: message});
  }
}
