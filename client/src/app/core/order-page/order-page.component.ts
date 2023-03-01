import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

import { Observable, Subscription } from 'rxjs';

import { ROUTE_CONFIGS } from '../../shared/constants/route.constants';
import { OrderModalComponent } from './components/order-modal/order-modal.component';
import { OrderService } from './services/order.service';
import { IOrderPosition } from '../../shared/models/entities.models';
import { ComputePricePipe } from '../../shared/pipes/compute-price/compute-price.pipe';

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [CommonModule, RouterModule, OrderModalComponent],
  templateUrl: './order-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [OrderService, ComputePricePipe]
})
export class OrderPageComponent implements OnInit, OnDestroy {
  @ViewChild('orderModal') orderModal!: OrderModalComponent;

  public isRoot = true;
  public routeConfigs = ROUTE_CONFIGS;
  public readonly list$: Observable<IOrderPosition[]> = this.orderService.list$;

  private subscription = new Subscription();

  constructor(
      public readonly orderService: OrderService,
      private readonly router: Router,
  ) {
  }

  public ngOnInit(): void {
    this.initRouterListener();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public openModal(): void {
    this.orderModal.open();
  }

  private initRouterListener(): void {
    this.subscription.add(
        this.router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
            this.isRoot = this.router.url === ROUTE_CONFIGS.order.fullPath;
          }
        })
    )
  }
}
