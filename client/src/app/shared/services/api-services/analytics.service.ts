import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IRevenueAnalytics } from '../../models/entities.models';
import { urls } from '../../constants/urls.constants';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: HttpClient) { }

  public getOverview(): Observable<IRevenueAnalytics> {
    return this.http.get<IRevenueAnalytics>(urls.overview)
  }

  public getAnalytics() {

  }
}
