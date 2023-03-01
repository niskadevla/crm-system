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
