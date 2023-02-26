import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Observable } from 'rxjs';

import { ROUTE_CONFIGS } from '../../shared/constants/route.constants';
import { ICategory } from '../../shared/models/entities.models';
import { CategoriesFacade } from '../../shared/services/facades/categories-facade.service';
import { LoaderComponent } from '../../shared/components/loader/loader.component';

@Component({
  selector: 'app-categories-page',
  standalone: true,
  imports: [CommonModule, RouterModule, LoaderComponent],
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesPageComponent {
  public categories$: Observable<ICategory[]> = this.categoriesFacade.getAllCategories;
  public routeConfigs = ROUTE_CONFIGS;

  constructor(private categoriesFacade: CategoriesFacade) {
  }
}
