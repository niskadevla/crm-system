import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-positions-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './positions-form.component.html',
  styleUrls: ['./positions-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PositionsFormComponent {

}
