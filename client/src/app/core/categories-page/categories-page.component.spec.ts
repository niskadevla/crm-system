import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CategoriesFacade } from '../../shared/services/facades/categories-facade.service';
import { categoriesFacadeMock } from '../../shared/mocks/categories-facade.mock';

import { CategoriesPageComponent } from './categories-page.component';

describe('CategoriesPageComponent', () => {
  let component: CategoriesPageComponent;
  let fixture: ComponentFixture<CategoriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesPageComponent, RouterTestingModule],
      providers: [
        {
          provide: CategoriesFacade,
          useValue: categoriesFacadeMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
