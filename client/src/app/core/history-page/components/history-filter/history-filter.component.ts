import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IFilter } from '../../../../shared/models/entities.models';
import { MaterialDatepicker, MaterialService } from '../../../../shared/services/material.service';
import { removeFalsyFromObj } from '../../../../shared/utils/common.functions';

@Component({
  selector: 'app-history-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './history-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryFilterComponent implements OnDestroy, AfterViewInit {
  @ViewChild('start') private readonly startRef!: ElementRef;
  @ViewChild('end') private readonly endRef!: ElementRef;

  @Output() public readonly onFilter = new EventEmitter<IFilter>();

  public order!: number;
  public isValid = true;

  private start!: MaterialDatepicker;
  private end!: MaterialDatepicker;

  constructor(
      private readonly materialService: MaterialService,
      private readonly cdr: ChangeDetectorRef
  ) {
  }

  public ngOnDestroy(): void {
    this.start.destroy();
    this.end.destroy();
  }

  public ngAfterViewInit(): void {
    this.start = this.materialService.initDatepicker(this.startRef, this.validate.bind(this));
    this.end = this.materialService.initDatepicker(this.endRef, this.validate.bind(this));
  }

  public submitFilter() {
    const filter: IFilter = {
      order: this.order,
      start: this.start.date,
      end: this.end.date
    };

    this.onFilter.emit(removeFalsyFromObj(filter));
  }

  private validate(): void {
    this.cdr.markForCheck();

    if (!this.start.date || !this.end.date) {
      this.isValid = true;
      return;
    }

    this.isValid = this.start.date < this.end.date;
  }

}
