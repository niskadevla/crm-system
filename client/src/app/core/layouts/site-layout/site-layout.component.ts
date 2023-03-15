import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialService } from '../../../shared/services/material.service';
import { ROUTE_CONFIGS } from '../../../shared/constants/route.constants';
import { IRoutesConfig } from '../../../shared/models/route.models';
import { AuthFacade } from '../../../shared/services/facades/auth-facade.service';

import { LINKS } from './constants/links.constants';
import { ILink } from './models/link.models';

@Component({
  selector: 'app-site-layout',
  standalone: true,
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss'],
  imports: [CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteLayoutComponent implements AfterViewInit {
  @ViewChild('floating') private floatingRef!: ElementRef;

  public links: ILink[] = LINKS;
  public routeConfigs: IRoutesConfig = ROUTE_CONFIGS;

  constructor(private readonly authFacade: AuthFacade, private readonly materialService: MaterialService) {}

  public ngAfterViewInit() {
    this.materialService.initializeFloatingButton(this.floatingRef);
  }

  public logout(): void {
    this.authFacade.logout();
  }
}
