import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderServiceStore } from '../../services/order.service';
import { orderServiceStoreMock } from '../../../../shared/mocks/order-service-store.mock';
import { MaterialService } from '../../../../shared/services/material.service';
import { materialServiceMock } from '../../../../shared/mocks/material-service.mock';
import { OrdersFacade } from '../../../../shared/services/facades/orders-facade.service';
import { orderFacadeMock } from '../../../../shared/mocks/order-facade.mock';

import { OrderModalComponent } from './order-modal.component';

describe('OrderModalComponent', () => {
  let component: OrderModalComponent;
  let fixture: ComponentFixture<OrderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderModalComponent],
      providers: [
        {
          provide: OrderServiceStore,
          useValue: orderServiceStoreMock
        },
        {
          provide: MaterialService,
          useValue: materialServiceMock
        },
        {
          provide: OrdersFacade,
          useValue: orderFacadeMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
