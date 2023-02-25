import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-site-layout',
  standalone: true,
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteLayoutComponent {

}
