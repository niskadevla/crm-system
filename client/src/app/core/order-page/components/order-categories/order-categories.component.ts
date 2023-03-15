import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Observable } from 'rxjs';

import { ICategory } from '../../../../shared/models/entities.models';
import { CategoriesFacade } from '../../../../shared/services/facades/categories-facade.service';
import { ROUTE_CONFIGS } from '../../../../shared/constants/route.constants';
import { IRoutesConfig } from '../../../../shared/models/route.models';

@Component({
  selector: 'app-order-categories',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './order-categories.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderCategoriesComponent {
  public categories$: Observable<ICategory[]> = this.categoriesFacade.getAllCategories;
  public routeConfigs: IRoutesConfig = ROUTE_CONFIGS;

  constructor(private categoriesFacade: CategoriesFacade) {}
}
