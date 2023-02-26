import { TestBed } from '@angular/core/testing';

import { CategoriesFacade } from './categories-facade.service';

describe('CategoriesFacadeService', () => {
  let service: CategoriesFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
