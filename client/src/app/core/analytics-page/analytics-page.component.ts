import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics-page.component.html',
  styleUrls: ['./analytics-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnalyticsPageComponent {

}
