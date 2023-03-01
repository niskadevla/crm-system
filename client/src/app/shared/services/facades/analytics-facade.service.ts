import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AnalyticsService } from '../api-services/analytics.service';
import { IRevenueAnalytics } from '../../models/entities.models';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsFacade {

  constructor(private analyticsApi: AnalyticsService) { }

  public getOverview(): Observable<IRevenueAnalytics> {
    return this.analyticsApi.getOverview();
  }
}
