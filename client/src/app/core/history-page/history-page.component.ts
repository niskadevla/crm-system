import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subscription } from 'rxjs';

import { MaterialInstance, MaterialService } from '../../shared/services/material.service';
import { OrdersFacade } from '../../shared/services/facades/orders-facade.service';
import { DEFAULT_PAGE_LIMIT, DEFAULT_PAGE_NUMBER } from './constants/request.consts';
import { IOrder } from '../../shared/models/entities.models';
import { HistoryListComponent } from './components/history-list/history-list.component';
import { HistoryFilterComponent } from './components/history-filter/history-filter.component';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [CommonModule, HistoryListComponent, HistoryFilterComponent],
  templateUrl: './history-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryPageComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('tooltip') tooltipRef!: ElementRef

  public tooltip!: MaterialInstance;
  public isFilterVisible = false;
  public orders: IOrder[] = [];
  public noMoreOrders = false;

  private page = DEFAULT_PAGE_NUMBER;
  private limit = DEFAULT_PAGE_LIMIT;
  private readonly subscription = new Subscription();

  constructor(
      private readonly materialService: MaterialService,
      private readonly orderFacade: OrdersFacade,
      private readonly cdr: ChangeDetectorRef
  ) {
  }

  public ngOnInit(): void {
    this.getOrders();
  }

  public ngOnDestroy(): void {
    this.tooltip.destroy();
    this.subscription.unsubscribe();
  }

  public ngAfterViewInit(): void {
    this.tooltip = this.materialService.initTooltip(this.tooltipRef);
  }

  public toggleTooltip(): void {
    this.isFilterVisible = !this.isFilterVisible;
  }

  public loadMore(): void {
    this.page++;
    this.getOrders();
  }

  private getOrders() {
    const params = {
      page: this.page,
      limit: this.limit
    }

    this.subscription.add(
        this.orderFacade.getOrders(params)
            .subscribe((orders: IOrder[]) => {
              this.orders = [...this.orders, ...orders];
              this.noMoreOrders = orders.length < this.limit;

              this.cdr.markForCheck();
            })
    )
  }

}
