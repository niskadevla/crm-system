import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { IOrder } from '../../../../shared/models/entities.models';
import { CURRENCY } from '../../../../shared/constants/common.constants';
import { DATE_FORMAT, TIME_FORMAT } from '../../../../shared/constants/date.constants';
import { ComputePriceModule } from '../../../../shared/pipes/compute-price/compute-price.module';
import { MaterialInstance, MaterialService } from '../../../../shared/services/material.service';

@Component({
  selector: 'app-history-list',
  standalone: true,
  imports: [CommonModule, ComputePriceModule],
  templateUrl: './history-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryListComponent implements OnDestroy, AfterViewInit {
  @ViewChild('modal') private readonly modalRef!: ElementRef;

  @Input() public orders: IOrder[] = [];

  public currency: string = CURRENCY;
  public dateFormat: string = DATE_FORMAT;
  public timeFormat: string = TIME_FORMAT;
  public selectedOrder!: IOrder;

  private modal!: MaterialInstance;

  constructor(private materialService: MaterialService) {
  }

  public ngAfterViewInit(): void {
    this.modal = this.materialService.initModal(this.modalRef);
  }

  public ngOnDestroy(): void {
    this.modal.destroy();
  }

  public selectOrder(order: IOrder): void {
    this.selectedOrder = order;
    this.modal.open();
  }

  public closeModal(): void {
    this.modal.close();
  }

}
