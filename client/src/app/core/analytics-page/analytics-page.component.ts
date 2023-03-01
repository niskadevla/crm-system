import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subscription, tap } from 'rxjs';
import Chart from 'chart.js/auto';

import { CURRENCY } from '../../shared/constants/common.constants';
import { AnalyticsFacade } from '../../shared/services/facades/analytics-facade.service';
import { IAnalytics } from '../../shared/models/entities.models';
import { IChartItemConfig } from './models/configs-analytics.models';
import { createChartConfig } from './utils/analytics.functions';

@Component({
  selector: 'app-analytics-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics-page.component.html',
  styleUrls: ['./analytics-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticsPageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('revenue') revenueRef!: ElementRef;
  @ViewChild('order') orderRef!: ElementRef;

  public currency = CURRENCY;
  public averageOrdersPerDay!: number;
  public pending = true;

  private subscription = new Subscription();

  constructor(
      private analyticsFacade: AnalyticsFacade,
      private cdr: ChangeDetectorRef
  ) {
  }

  public ngAfterViewInit(): void {
    this.getAnalytics();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getAnalytics(): void {
    this.subscription.add(
        this.analyticsFacade.getAnalytics()
            .pipe(
                tap(this.renderChart.bind(this))
            )
            .subscribe((data: IAnalytics) => {
              this.averageOrdersPerDay = data.averageOrdersPerDay;

              this.cdr.markForCheck();
            })
    )
  }

  private renderChart(analyticsData: IAnalytics): void {
    const revenueConfig: IChartItemConfig<number[]> = {
      label: 'Revenue',
      color: 'rgb(255, 99, 132)',
      labels: analyticsData.chart.map(item => item.label),
      data: analyticsData.chart.map(item => item.revenue),
    };

    const orderConfig: IChartItemConfig<number[]> = {
      label: 'Orders',
      color: 'rgb(54, 162, 235)',
      labels: analyticsData.chart.map(item => item.label),
      data: analyticsData.chart.map(item => item.numberOfOrders),
    };

    const revenueCtx = this.revenueRef.nativeElement.getContext('2d');
    const orderCtx = this.orderRef.nativeElement.getContext('2d');

    new Chart(revenueCtx, createChartConfig(revenueConfig));
    new Chart(orderCtx, createChartConfig(orderConfig));

    this.pending = false;
  }

}
