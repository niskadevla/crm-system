export interface IUser {
  email: string;
  password: string;
}

export interface ICategory {
  name: string;
  imageSrc?: string;
  user: string;
  _id: string;
}

export interface IPosition {
  name: string;
  cost: number;
  category: string;
  user?: string;
  _id?: string;
  quantity?: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IOrderPosition extends Pick<IPosition, 'name' | 'cost' | '_id' | 'quantity'> {
}

export interface IOrder {
  list: IOrderPosition[];
  date?: Date;
  order?: number;
  user?: string;
  _id?: string;
}

export interface IFilter {
  start?: Date;
  end?: Date;
  order?: number;
}

export interface IRevenueStatistic {
  percent: number;
  compare: number;
  yesterday: number;
  isHigher: boolean;
}

export interface IRevenueAnalytics {
  revenue: IRevenueStatistic;
  orders: IRevenueStatistic;
}

export interface IChart {
  label: string;
  numberOfOrders: number;
  revenue: number;
}

export interface IAnalytics {
  averageOrdersPerDay: number;
  chart: IChart[];
}
