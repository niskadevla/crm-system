import { IAnalytics, IChart, IOrder } from '../interfaces';
import { calculatePrice, getOrdersMap } from '../functions';

export class AnalyticsClass implements IAnalytics {
  private readonly ordersMap: Record<string, IOrder[]>;

  public readonly averageOrdersPerDay: number;
  public readonly chart: IChart[];

  constructor(orders: IOrder[] = []) {
    this.ordersMap = getOrdersMap(orders as IOrder[]);
    this.averageOrdersPerDay = +(calculatePrice(orders) / Object.keys(this.ordersMap).length).toFixed(2);
    this.chart = this.mapCharts(this.ordersMap);
  }

  private mapCharts(ordersMap: Record<string, IOrder[]>): IChart[] {
    return Object.keys(ordersMap).map(label => {
      const numberOfOrders = ordersMap[label].length;
      const revenue = calculatePrice(ordersMap[label])

      return {label, numberOfOrders, revenue}
    })
  }

}
