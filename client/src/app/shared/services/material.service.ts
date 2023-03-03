import { ElementRef, Injectable } from '@angular/core';

import { DATE_PICKER_DATE_FORMAT } from '../constants/date.constants';

declare let M: any;

export interface MaterialInstance {
  open(): void;
  close(): void;
  destroy(): void;
}

export interface MaterialDatepicker extends MaterialInstance {
  date?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  public toast(message: string): void {
    if (message) {
      M.toast({ html: message });
    }
  }

  public initializeFloatingButton(ref: ElementRef): void {
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

  public initDatepicker(ref: ElementRef, onClose: () => void): MaterialDatepicker {
    return M.Datepicker.init(ref.nativeElement, {
      format: DATE_PICKER_DATE_FORMAT,
      showClearBtn: true,
      onClose
    });
  }

  public initTapTarget(ref: ElementRef): MaterialInstance {
    return M.TapTarget.init(ref.nativeElement);
  }
}
