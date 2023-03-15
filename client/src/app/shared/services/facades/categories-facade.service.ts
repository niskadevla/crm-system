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

  constructor(private categoriesApi: CategoriesService) {}

  public getCategoryById(id: string): Observable<ICategory> {
    return this.categoriesApi.getById(id);
  }

  public createCategory(name: string, image?: File): Observable<ICategory> {
    return this.categoriesApi.create(name, image);
  }

  public updateCategory(id: string, name: string, image?: File): Observable<ICategory> {
    return this.categoriesApi.update(id, name, image);
  }

  public deleteCategory(id: string): Observable<ICategory> {
    return this.categoriesApi.delete(id);
  }
}
