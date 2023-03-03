import { of } from 'rxjs';

import { AnalyticsFacade } from '../services/facades/analytics-facade.service';

import { analyticsMock, revenueAnalyticsMock } from './entities.mock';

export const analyticsFacadeMock: AnalyticsFacade = {
  getOverview: jest.fn().mockReturnValue(of(revenueAnalyticsMock)),
  getAnalytics: jest.fn().mockReturnValue(of(analyticsMock))
} as unknown as AnalyticsFacade;
