import { errorHandler, IGetRequest, IPostRequest, IQueryPagination } from '../utils';
import { createOrder, getLastOrderByFilter, getOrdersByFilterWithPagination } from '../models/order/order.models';
import { IOrder } from '../entities';

export const httpGetAll = async ({ query, user }: IGetRequest<{}, IQueryPagination>, res: any) => {
  try {
    const date =
      query?.start || query?.end
        ? {
            $gte: query?.start,
            $lte: query?.end
          }
        : undefined;
    const filter: any = {
      user: user?.id,
      order: query?.order,
      date
    };
    const queryPagination = {
      limit: query?.limit,
      page: query?.page
    };

    const orders = await getOrdersByFilterWithPagination(JSON.parse(JSON.stringify(filter)), queryPagination);

    res.status(200).json(orders);
  } catch (e: unknown) {
    errorHandler(res, e as Error);
  }
};

export const httpCreate = async ({ body, user }: IPostRequest<Omit<IOrder, 'date' | 'user'>>, res: any) => {
  try {
    const lastOrder = await getLastOrderByFilter({ user: user?.id });
    let maxOrder = lastOrder?.order ?? 0;
    const newOrder: IOrder = {
      list: body.list,
      user: user?.id,
      order: ++maxOrder
    };

    const order = await createOrder(newOrder);

    return res.status(201).json(order);
  } catch (e: unknown) {
    errorHandler(res, e as Error);
  }
};
