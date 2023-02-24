import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ROUTE_CONFIGS } from '../../../shared/constants/route.constants';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLayoutComponent {
  public readonly routeConfigs = ROUTE_CONFIGS;
}
