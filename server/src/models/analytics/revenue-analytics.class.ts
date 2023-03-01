import moment from 'moment';

import { IOrder, IOrderItem } from '../../entities';
import { DEFAULT_DATE_FORMAT } from '../../utils';
import { IRevenueAnalytics, IRevenueStatistic } from '../../entities/interfaces/analytics.interfaces';

export class RevenueAnalytics implements IRevenueAnalytics {
  public revenue: IRevenueStatistic;
  public orders: IRevenueStatistic;

  private readonly ordersMap: Record<string, IOrder[]>;
  private readonly yesterdayOrders: IOrder[];
  private readonly yesterdayOrdersNumber: number;
  private readonly totalOrdersNumber: number;
  private readonly daysNumber: number;
  private readonly ordersPerDay: number;
  private readonly ordersPercent: number;
  private readonly totalRevenue: number;
  private readonly revenuePerDay: number;
  private readonly yesterdayRevenue: number;
  private readonly revenuePercent: number;
  private readonly compareRevenue: number;
  private readonly compareOrdersNumber: number;

  constructor(orders: IOrder[] = []) {
    this.ordersMap = this.getOrdersMap(orders as IOrder[]);
    this.yesterdayOrders = this.ordersMap[moment().add(-1, 'd').format(DEFAULT_DATE_FORMAT)] || [];

    this.yesterdayOrdersNumber = this.yesterdayOrders.length;
    this.totalOrdersNumber = orders.length;
    this.daysNumber = Object.keys(this.ordersMap).length;
    this.ordersPerDay = +(this.totalOrdersNumber / this.daysNumber).toFixed(0);
    this.ordersPercent = +(((this.yesterdayOrdersNumber / this.ordersPerDay) - 1) * 100).toFixed(2);
    this.totalRevenue = this.calculatePrice(orders);
    this.revenuePerDay = this.totalRevenue / this.daysNumber;
    this.yesterdayRevenue = this.calculatePrice(this.yesterdayOrders);
    this.revenuePercent = +(((this.yesterdayRevenue / this.revenuePerDay) - 1) * 100).toFixed(2);
    this.compareRevenue = +(this.yesterdayRevenue - this.revenuePerDay).toFixed(2);
    this.compareOrdersNumber = +(this.yesterdayOrdersNumber - this.ordersPerDay).toFixed(2);

    this.revenue = {
      percent: Math.abs(this.revenuePercent),
      compare: Math.abs(this.compareRevenue),
      yesterday: this.yesterdayRevenue,
      isHigher: this.revenuePercent > 0,
    }

    this.orders = {
      percent: Math.abs(this.ordersPercent),
      compare: Math.abs(this.compareOrdersNumber),
      yesterday: this.yesterdayOrdersNumber,
      isHigher: this.ordersPercent > 0,
    }
  }

  private getOrdersMap(orders: IOrder[] = []): Record<string, IOrder[]> {
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

  private calculatePrice(orders: IOrder[]): number {
    return orders.reduce((total: number, order: IOrder) => {
      const orderPrice = order.list.reduce((orderTotal: number, item: IOrderItem) =>
          orderTotal += item.cost * item.quantity, 0)

      return total += orderPrice;
    }, 0)
  }

}
