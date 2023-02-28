import { ElementRef, Injectable } from '@angular/core';

declare var M: any;

export interface MaterialInstance {
  open(): void;
  close(): void;
  destroy(): void;
}

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

  public initModal(ref: ElementRef): MaterialInstance {
    return M.Modal.init(ref.nativeElement);
  }

  public initTooltip(ref: ElementRef): MaterialInstance {
    return M.Tooltip.init(ref.nativeElement);
  }
}
