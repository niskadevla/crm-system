import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { MockProvider } from 'ng-mocks';

import { CategoriesFacade } from '../../../shared/services/facades/categories-facade.service';
import { categoriesFacadeMock } from '../../../shared/mocks/categories-facade.mock';
import { MaterialService } from '../../../shared/services/material.service';
import { materialServiceMock } from '../../../shared/mocks/material-service.mock';

import { CategoriesFormComponent } from './categories-form.component';

describe('CategoriesFormComponent', () => {
  let component: CategoriesFormComponent;
  let fixture: ComponentFixture<CategoriesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesFormComponent],
      providers: [
        MockProvider(ActivatedRoute),
        {
          provide: CategoriesFacade,
          useValue: categoriesFacadeMock
        },
        {
          provide: MaterialService,
          useValue: materialServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
