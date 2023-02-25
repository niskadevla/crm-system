import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthService } from '../../../shared/services/api-services/auth.service';
import { MaterialService } from '../../../shared/services/material.service';
import { LINKS } from './constants/links.constants';
import { ROUTE_CONFIGS } from '../../../shared/constants/route.constants';

@Component({
  selector: 'app-site-layout',
  standalone: true,
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss'],
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteLayoutComponent implements AfterViewInit {
  @ViewChild('floating') public floatingRef!: ElementRef;

  public links = LINKS;
  public routeConfigs = ROUTE_CONFIGS;

  constructor(
      private readonly authService: AuthService,
      private readonly materialService: MaterialService
  ) {
  }

  public ngAfterViewInit() {
    this.materialService.initializeFloatingButton(this.floatingRef);
  }

  public logout() {
    this.authService.logout();
  }
}
