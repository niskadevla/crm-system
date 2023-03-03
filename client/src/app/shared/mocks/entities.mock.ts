import {
  IAnalytics,
  ICategory,
  IChart,
  IOrder,
  IOrderPosition,
  IPosition,
  IRevenueAnalytics,
  IRevenueStatistic,
  IUser
} from '../models/entities.models';
import { IToken } from '../models/auth.models';

export const tokenMock: IToken = { token: 'jwt' };

export const userMock: IUser = {
  email: 'some@email.dot',
  password: '123456'
};

export const categoryMock: ICategory = {
  name: 'Beverages',
  imageSrc: 'picture.jpg',
  user: '123qw',
  _id: '2w23q'
};

export const positionMock: IPosition = {
  name: 'Coffee',
  cost: 10,
  category: 'Beverages',
  user: '123qw',
  _id: 'sw124',
  quantity: 1
};

export const orderPositionMock: IOrderPosition = {
  name: 'Coffee',
  cost: 10,
  _id: 'sw124',
  quantity: 2
};

export const orderMock: IOrder = {
  list: [orderPositionMock]
};

export const revenueStatisticMock: IRevenueStatistic = {
  percent: 20,
  compare: 5,
  yesterday: 1500,
  isHigher: true
};

export const revenueAnalyticsMock: IRevenueAnalytics = {
  revenue: revenueStatisticMock,
  orders: revenueStatisticMock
};

export const chartMock: IChart = {
  label: '20.03.23',
  numberOfOrders: 7,
  revenue: 900
};

export const analyticsMock: IAnalytics = {
  averageOrdersPerDay: 4,
  chart: [chartMock]
};
