import { TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';

import { CategoriesService } from '../api-services/categories.service';

import { CategoriesFacade } from './categories-facade.service';

describe('CategoriesFacadeService', () => {
  let service: CategoriesFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockProvider(CategoriesService)]
    });
    service = TestBed.inject(CategoriesFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
