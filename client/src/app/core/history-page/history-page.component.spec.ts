import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialService } from '../../shared/services/material.service';
import { materialServiceMock } from '../../shared/mocks/material-service.mock';
import { OrdersFacade } from '../../shared/services/facades/orders-facade.service';
import { orderFacadeMock } from '../../shared/mocks/order-facade.mock';

import { HistoryPageComponent } from './history-page.component';

describe('HistoryPageComponent', () => {
  let component: HistoryPageComponent;
  let fixture: ComponentFixture<HistoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryPageComponent],
      providers: [
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

    fixture = TestBed.createComponent(HistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
