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
import { IAnalytics, IChart } from '../../shared/models/entities.models';

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
  @ViewChild('revenue') private revenueRef!: ElementRef;
  @ViewChild('order') private orderRef!: ElementRef;

  public currency: string = CURRENCY;
  public averageOrdersPerDay!: number;
  public pending: boolean = true;

  private subscription: Subscription = new Subscription();

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
      labels: analyticsData.chart.map((item: IChart) => item.label),
      data: analyticsData.chart.map((item: IChart) => item.revenue)
    };

    const orderConfig: IChartItemConfig<number[]> = {
      label: 'Orders',
      color: 'rgb(54, 162, 235)',
      labels: analyticsData.chart.map((item: IChart) => item.label),
      data: analyticsData.chart.map((item: IChart) => item.numberOfOrders)
    };

    const revenueCtx: any = this.revenueRef.nativeElement.getContext('2d');
    const orderCtx: any = this.orderRef.nativeElement.getContext('2d');

    new Chart(revenueCtx, createChartConfig(revenueConfig));
    new Chart(orderCtx, createChartConfig(orderConfig));

    this.pending = false;
  }

}
