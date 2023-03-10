import moment from 'moment';

import { IOrder, IRevenueAnalytics, IRevenueStatistic } from '../interfaces';
import { DEFAULT_DATE_FORMAT } from '../../utils';
import { calculatePrice, getOrdersMap } from '../functions';

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
    this.ordersMap = getOrdersMap(orders as IOrder[]);
    this.yesterdayOrders = this.ordersMap[moment().add(-1, 'd').format(DEFAULT_DATE_FORMAT)] || [];

    this.yesterdayOrdersNumber = this.yesterdayOrders.length;
    this.totalOrdersNumber = orders.length;
    this.daysNumber = Object.keys(this.ordersMap).length;
    this.ordersPerDay = +(this.totalOrdersNumber / this.daysNumber).toFixed(0);
    this.ordersPercent = +(((this.yesterdayOrdersNumber / this.ordersPerDay) - 1) * 100).toFixed(2);
    this.totalRevenue = calculatePrice(orders);
    this.revenuePerDay = this.totalRevenue / this.daysNumber;
    this.yesterdayRevenue = calculatePrice(this.yesterdayOrders);
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

}
