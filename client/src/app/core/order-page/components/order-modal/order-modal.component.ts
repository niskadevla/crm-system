import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription, take } from 'rxjs';

import { MaterialInstance, MaterialService } from '../../../../shared/services/material.service';
import { OrderServiceStore } from '../../services/order.service';
import { IOrder, IOrderPosition } from '../../../../shared/models/entities.models';
import { CURRENCY } from '../../../../shared/constants/common.constants';
import { OrdersFacade } from '../../../../shared/services/facades/orders-facade.service';

@Component({
  selector: 'app-order-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('modal') public modalRef!: ElementRef;

  public readonly list$: Observable<IOrderPosition[]> = this.orderServiceStore.list$;
  public readonly price$: Observable<number> = this.orderServiceStore.price$;

  public modal!: MaterialInstance;
  public pending: boolean = false;
  public currency: string = CURRENCY;
  public list: IOrderPosition[] = [];

  private subscription: Subscription = new Subscription();

  public get isDisabledSubmit(): boolean {
    return !this.list.length || this.pending;
  }

  constructor(
    private readonly materialService: MaterialService,
    private readonly orderServiceStore: OrderServiceStore,
    private readonly ordersFacade: OrdersFacade,
    private readonly cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.getOrderPositionList();
  }

  public ngAfterViewInit(): void {
    this.modal = this.materialService.initModal(this.modalRef);
  }

  public ngOnDestroy(): void {
    this.modal.destroy();
    this.subscription.unsubscribe();
  }

  public open(): void {
    this.modal.open();
  }

  public cancel(): void {
    this.modal.close();
  }

  public submit(): void {
    this.pending = true;

    const newOrder: IOrder = {
      list: this.removeIdFromList(this.list)
    };

    this.subscription.add(
      this.ordersFacade
        .createOrder(newOrder)
        .pipe(take(1))
        .subscribe({
          next: ({ order }: IOrder) => {
            this.materialService.toast(`Order №${order} has been added.`);
            this.orderServiceStore.clear();
          },
          error: (err: any) => this.materialService.toast(err.error?.message),
          complete: () => {
            this.modal.close();
            this.pending = false;
          }
        })
    );
  }

  public removePosition(orderPosition: IOrderPosition): void {
    this.orderServiceStore.remove(orderPosition);
  }

  private getOrderPositionList(): void {
    this.subscription.add(
      this.list$.subscribe((list: IOrderPosition[]) => {
        this.list = list;

        this.cdr.markForCheck();
      })
    );
  }

  private removeIdFromList(list: IOrderPosition[]): IOrderPosition[] {
    return list.map(({ _id, ...rest }: IOrderPosition) => rest);
  }
}
