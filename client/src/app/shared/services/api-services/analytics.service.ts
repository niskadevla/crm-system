import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IAnalytics, IRevenueAnalytics } from '../../models/entities.models';
import { urls } from '../../constants/urls.constants';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: HttpClient) { }

  public getOverview(): Observable<IRevenueAnalytics> {
    return this.http.get<IRevenueAnalytics>(`${urls.analytics}/overview`)
  }

  public getAnalytics(): Observable<IAnalytics> {
    return this.http.get<IAnalytics>(`${urls.analytics}/analytics`)
  }
}
