import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Observable } from 'rxjs';

import { ICategory } from '../../../../shared/models/entities.models';
import { CategoriesFacade } from '../../../../shared/services/facades/categories-facade.service';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { ROUTE_CONFIGS } from '../../../../shared/constants/route.constants';

@Component({
  selector: 'app-order-categories',
  standalone: true,
  imports: [CommonModule, RouterModule, LoaderComponent],
  templateUrl: './order-categories.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderCategoriesComponent {
  public categories$: Observable<ICategory[]> = this.categoriesFacade.getAllCategories;
  public routeConfigs = ROUTE_CONFIGS;

  constructor(private categoriesFacade: CategoriesFacade) {
  }

}