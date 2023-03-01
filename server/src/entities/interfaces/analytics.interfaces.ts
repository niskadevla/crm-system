export interface IRevenueAnalytics {
  revenue: IRevenueStatistic;
  orders: IRevenueStatistic;
}

export interface IRevenueStatistic {
  percent: number;
  compare: number;
  yesterday: number;
  isHigher: boolean;
}

export interface IAnalytics {
  averageOrdersPerDay: number;
  chart: IChart[];
}

export interface IChart {
  label: string;
  numberOfOrders: number;
  revenue: number;
}