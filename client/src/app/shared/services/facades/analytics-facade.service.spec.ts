import { TestBed } from '@angular/core/testing';

import { AnalyticsFacade } from './analytics-facade.service';

describe('AnalyticsFacadeService', () => {
  let service: AnalyticsFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyticsFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
