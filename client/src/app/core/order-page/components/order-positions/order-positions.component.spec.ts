import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { MockModule, MockProvider } from 'ng-mocks';

import { OrderServiceStore } from '../../services/order.service';
import { orderServiceStoreMock } from '../../../../shared/mocks/order-service-store.mock';
import { MaterialService } from '../../../../shared/services/material.service';
import { materialServiceMock } from '../../../../shared/mocks/material-service.mock';
import { PositionsFacade } from '../../../../shared/services/facades/positions-facade.service';
import { positionsFacadeMock } from '../../../../shared/mocks/position-facade.mock';

import { OrderPositionsComponent } from './order-positions.component';

describe('OrderPositionsComponent', () => {
  let component: OrderPositionsComponent;
  let fixture: ComponentFixture<OrderPositionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderPositionsComponent, RouterTestingModule, MockModule(FormsModule)],
      providers: [
        MockProvider(ActivatedRoute),
        {
          provide: OrderServiceStore,
          useValue: orderServiceStoreMock
        },
        {
          provide: MaterialService,
          useValue: materialServiceMock
        },
        {
          provide: PositionsFacade,
          useValue: positionsFacadeMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
