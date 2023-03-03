import { TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';

import { AnalyticsService } from '../api-services/analytics.service';

import { AnalyticsFacade } from './analytics-facade.service';

describe('AnalyticsFacadeService', () => {
  let service: AnalyticsFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockProvider(AnalyticsService)]
    });
    service = TestBed.inject(AnalyticsFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
