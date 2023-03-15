import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { IPosition, IOrderPosition } from '../../../shared/models/entities.models';
import { MIN_QUANTITY } from '../consts/order-page.consts';
import { findItemById, removeItemById } from '../../../shared/utils/common.functions';
import { ComputePricePipe } from '../../../shared/pipes/compute-price/compute-price.pipe';

@Injectable()
export class OrderServiceStore {
  private readonly _list$$: BehaviorSubject<IOrderPosition[]> = new BehaviorSubject<IOrderPosition[]>([]);
  private readonly _price$$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public get list$(): Observable<IOrderPosition[]> {
    return this._list$$.asObservable();
  }

  public get price$(): Observable<number> {
    return this._price$$.asObservable();
  }

  constructor(private computePricePipe: ComputePricePipe) {}

  public addOrderPosition({ name, cost, quantity = MIN_QUANTITY, _id = '' }: IPosition): void {
    const orderPosition: Required<IOrderPosition> = { name, cost, quantity, _id };
    const sameOrderPosition: IOrderPosition | undefined = findItemById(this._list$$.getValue(), orderPosition._id);

    if (sameOrderPosition) {
      (sameOrderPosition.quantity as number) += orderPosition.quantity;
    } else {
      this._list$$.next([...this._list$$.getValue(), orderPosition]);
    }
    this.computePrice();
  }

  public remove(orderPosition: IOrderPosition): void {
    const list: IOrderPosition[] = removeItemById(this._list$$.getValue(), orderPosition._id ?? '');

    this._list$$.next(list);
    this.computePrice();
  }

  public clear(): void {
    this._list$$.next([]);
    this._price$$.next(0);
  }

  private computePrice(): void {
    const price: number = this.computePricePipe.transform(this._list$$.getValue());

    this._price$$.next(price);
  }
}
