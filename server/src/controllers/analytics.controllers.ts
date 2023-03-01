import { errorHandler, IGetRequest } from '../utils';
import { getAllOrdersByFilter } from '../models/order/order.models';
import { RevenueAnalytics } from '../models/analytics/revenue-analytics.class';
import { IOrder } from '../entities';

export const httpOverview = async ({user}: IGetRequest, res: any) => {
  try {
    const allOrders = await getAllOrdersByFilter({user: user?.id})

    return res.status(200).json(new RevenueAnalytics(allOrders as IOrder[]));
  } catch (err: unknown) {
    return errorHandler(res, err as Error);
  }
};

export const httpAnalytics = async (req: any, res: any) => {

};
