import { of } from 'rxjs';

import { OrderServiceStore } from '../../core/order-page/services/order.service';

import { orderPositionMock } from './entities.mock';

export const orderServiceStoreMock: OrderServiceStore = {
  list$: of([orderPositionMock]),
  price$: of(900),
  addOrderPosition: jest.fn(),
  remove: jest.fn(),
  clear: jest.fn()
} as unknown as OrderServiceStore;
