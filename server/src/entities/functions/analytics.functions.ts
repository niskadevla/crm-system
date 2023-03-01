import moment from 'moment';

import { DEFAULT_DATE_FORMAT } from '../../utils';
import { IOrder, IOrderItem } from '../interfaces';

export const calculatePrice = (orders: IOrder[]): number => {
  return orders.reduce((total: number, order: IOrder) => {
    const orderPrice = order.list.reduce((orderTotal: number, item: IOrderItem) =>
        orderTotal += item.cost * item.quantity, 0)

    return total += orderPrice;
  }, 0)
}

export const getOrdersMap = (orders: IOrder[] = []): Record<string, IOrder[]> => {
  const daysOrders: Record<string, IOrder[]> = {};

orders.forEach((order: IOrder) => {
  const date = moment(order.date).format(DEFAULT_DATE_FORMAT);
  const today = moment().format(DEFAULT_DATE_FORMAT);

  if (date === today) {
    return;
  }

  (daysOrders[date] ?? []).push(order);
});

return daysOrders;
}
