import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Observable } from 'rxjs';

import { ROUTE_CONFIGS } from '../../shared/constants/route.constants';
import { ICategory } from '../../shared/models/entities.models';
import { CategoriesFacade } from '../../shared/services/facades/categories-facade.service';
import { IRoutesConfig } from '../../shared/models/route.models';

@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './categories-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesPageComponent {
  public categories$: Observable<ICategory[]> = this.categoriesFacade.getAllCategories;
  public routeConfigs: IRoutesConfig = ROUTE_CONFIGS;

  constructor(private categoriesFacade: CategoriesFacade) {}
}
