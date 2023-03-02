import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _spinner: number = 0;
  private _spinner$$: BehaviorSubject<number> = new BehaviorSubject<number>(this._spinner);

  public get spinner$(): Observable<number> {
    return this._spinner$$.asObservable();
  }

  public increaseSpinner(): void {
    this._spinner$$.next(++this._spinner);
  }

  public decreaseSpinner(): void {
    this._spinner$$.next(--this._spinner);
  }
}
