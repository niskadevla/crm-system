import { errorHandler, IGetRequest } from '../utils';
import { getAllOrdersByFilter } from '../models/order/order.models';
import { AnalyticsClass, IOrder, IRevenueAnalytics, RevenueAnalytics } from '../entities';

export const httpOverview = async ({user}: IGetRequest, res: any) => {
  try {
    const allOrders = await getAllOrdersByFilter({user: user?.id});
    const {revenue, orders}: IRevenueAnalytics = new RevenueAnalytics(allOrders as IOrder[]);

    return res.status(200).json({revenue, orders});
  } catch (err: unknown) {
    return errorHandler(res, err as Error);
  }
};

export const httpAnalytics = async ({user}: IGetRequest, res: any) => {
  try {
    const allOrders = await getAllOrdersByFilter({user: user?.id});
    const {averageOrdersPerDay, chart} = new AnalyticsClass(allOrders as IOrder[]);

    return res.status(200).json({averageOrdersPerDay, chart});
  } catch (err: unknown) {
    return errorHandler(res, err as Error);
  }
};
