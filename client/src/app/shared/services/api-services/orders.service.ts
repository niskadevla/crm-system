import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IOrder } from '../../models/entities.models';
import { urls } from '../../constants/urls.constants';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private readonly http: HttpClient) { }

  public createOrder(order: IOrder): Observable<IOrder> {
    return this.http.post<IOrder>(urls.order, order);
  }

  public getOrders(params: any = {}): Observable<IOrder[]> {
    const httpParams: HttpParams = new HttpParams({
      fromObject: params
    });

    return this.http.get<IOrder[]>(urls.order, {
      params: httpParams
    })
  }
}
