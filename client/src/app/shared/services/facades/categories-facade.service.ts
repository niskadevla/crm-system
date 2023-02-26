import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { CategoriesService } from '../api-services/categories.service';
import { ICategory } from '../../models/entities.models';

@Injectable({
  providedIn: 'root'
})
export class CategoriesFacade {

  public get getAllCategories(): Observable<ICategory[]> {
    return this.categoriesApi.getAll();
  }

  constructor(private categoriesApi: CategoriesService) { }

  public getCategoryById(id: string): Observable<ICategory> {
    return this.categoriesApi.getById(id);
  }
}
