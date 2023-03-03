import { TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';

import { OrdersService } from '../api-services/orders.service';

import { OrdersFacade } from './orders-facade.service';

describe('OrderFacadeService', () => {
  let service: OrdersFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockProvider(OrdersService)]
    });
    service = TestBed.inject(OrdersFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
