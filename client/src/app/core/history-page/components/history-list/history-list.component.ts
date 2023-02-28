import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IOrder } from '../../../../shared/models/entities.models';
import { CURRENCY } from '../../../../shared/constants/common.constants';

@Component({
  selector: 'app-history-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryListComponent {
  @Input() public orders: IOrder[] = [];

  public currency = CURRENCY;
}
