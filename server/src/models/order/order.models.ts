import { OrdersModel } from './order.mongo';
import { IOrder } from '../../entities';
import { ExcludedQuery, getPagination, IQueryPagination, OrderEnum } from '../../utils';

export const getLastOrderByFilter = async (filter: any) => {
  return OrdersModel.findOne(filter).sort({ date: OrderEnum.Desc });
};

export const createOrder = async (order: IOrder) => {
  return new OrdersModel(order).save();
};

export const getOrdersByFilterWithPagination = async (filter: any, queryPagination: Partial<IQueryPagination>) => {
  const { skip, limit } = getPagination(queryPagination);

  return OrdersModel.find(filter, ExcludedQuery).sort({ date: OrderEnum.Desc }).skip(skip).limit(limit);
};
