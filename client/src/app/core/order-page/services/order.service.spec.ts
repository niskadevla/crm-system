import { TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';

import { ComputePricePipe } from '../../../shared/pipes/compute-price/compute-price.pipe';

import { OrderServiceStore } from './order.service';

describe('OrderServiceStore', () => {
  let service: OrderServiceStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderServiceStore, MockProvider(ComputePricePipe)]
    });
    service = TestBed.inject(OrderServiceStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
