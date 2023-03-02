import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ROUTE_CONFIGS } from '../../../shared/constants/route.constants';
import { IRoutesConfig } from '../../../shared/models/route.models';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLayoutComponent {
  public readonly routeConfigs: IRoutesConfig = ROUTE_CONFIGS;
}
