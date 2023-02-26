import { ElementRef, Injectable } from '@angular/core';

declare var M: any;

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  public toast(message: string) {
    if (message) {
      M.toast({html: message});
    }
  }

  public initializeFloatingButton(ref: ElementRef) {
    M.FloatingActionButton.init(ref.nativeElement);
  }

  public updateTextInputs(): void {
    M.updateTextFields();
  }
}
