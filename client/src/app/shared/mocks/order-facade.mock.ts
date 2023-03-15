import { of } from 'rxjs';

import { OrdersFacade } from '../services/facades/orders-facade.service';

import { orderMock } from './entities.mock';

export const orderFacadeMock: OrdersFacade = {
  createOrder: jest.fn().mockReturnValue(of(orderMock)),
  getOrders: jest.fn().mockReturnValue(of([orderMock]))
} as unknown as OrdersFacade;
