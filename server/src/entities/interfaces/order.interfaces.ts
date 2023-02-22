export interface IOrder {
  order: number;
  list: IOrderItem[];
  user?: string;
  date?: Date;
}

export interface IOrderItem {
  name: string;
  quantity: number;
  cost: number;
}