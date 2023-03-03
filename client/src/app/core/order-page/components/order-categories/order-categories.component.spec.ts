import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CategoriesFacade } from '../../../../shared/services/facades/categories-facade.service';
import { categoriesFacadeMock } from '../../../../shared/mocks/categories-facade.mock';

import { OrderCategoriesComponent } from './order-categories.component';

describe('OrderCategoriesComponent', () => {
  let component: OrderCategoriesComponent;
  let fixture: ComponentFixture<OrderCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderCategoriesComponent, RouterTestingModule],
      providers: [
        {
          provide: CategoriesFacade,
          useValue: categoriesFacadeMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
