import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
