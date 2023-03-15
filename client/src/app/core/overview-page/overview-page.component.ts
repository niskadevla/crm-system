import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable } from 'rxjs';

import { IRevenueAnalytics } from '../../shared/models/entities.models';
import { AnalyticsFacade } from '../../shared/services/facades/analytics-facade.service';
import { MaterialInstance, MaterialService } from '../../shared/services/material.service';
import { DATE_FORMAT } from '../../shared/constants/date.constants';
import { CURRENCY } from '../../shared/constants/common.constants';

@Component({
  selector: 'app-overview-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewPageComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('tapTarget') private readonly tapTargetRef!: ElementRef;

  public readonly dateFormat: string = DATE_FORMAT;
  public readonly currency: string = CURRENCY;

  public tapTarget!: MaterialInstance;
  public overviewData$!: Observable<IRevenueAnalytics>;
  public yesterday: Date = new Date();

  constructor(
      private analyticsFacade: AnalyticsFacade,
      private materialService: MaterialService
  ) {
  }

  public ngOnInit(): void {
    this.getOverviewData();
    this.setYesterday();
  }

  public ngOnDestroy(): void {
    this.tapTarget.destroy();
  }

  public ngAfterViewInit(): void {
    this.tapTarget = this.materialService.initTapTarget(this.tapTargetRef);
  }

  public openInfo(): void {
    this.tapTarget.open();
  }

  private getOverviewData(): void {
    this.overviewData$ = this.analyticsFacade.getOverview();
  }

  private setYesterday(): void {
    this.yesterday.setDate(new Date().getDate() - 1);
  }

}
