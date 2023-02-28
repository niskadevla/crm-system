import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryFilterComponent {

}
