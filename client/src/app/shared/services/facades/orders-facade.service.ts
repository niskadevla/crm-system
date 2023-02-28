import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { OrdersService } from '../api-services/orders.service';
import { IOrder } from '../../models/entities.models';

@Injectable({
  providedIn: 'root'
})
export class OrdersFacade {

  constructor(private readonly ordersServiceApi: OrdersService) { }

  public createOrder(order: IOrder): Observable<IOrder> {
    return this.ordersServiceApi.createOrder(order);
  }

  public getOrders(params: any): Observable<IOrder[]> {
    return this.ordersServiceApi.getOrders(params);
  }
}
