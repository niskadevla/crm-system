import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MockComponent } from 'ng-mocks';

import { orderServiceStoreMock } from '../../shared/mocks/order-service-store.mock';

import { OrderPageComponent } from './order-page.component';
import { OrderServiceStore } from './services/order.service';
import { OrderModalComponent } from './components/order-modal/order-modal.component';

describe('OrderPageComponent', () => {
  let component: OrderPageComponent;
  let fixture: ComponentFixture<OrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderPageComponent, RouterTestingModule],
      declarations: [MockComponent(OrderModalComponent)],
      providers: [
        {
          provide: OrderServiceStore,
          useValue: orderServiceStoreMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
