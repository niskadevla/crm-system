import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ICategory } from '../../models/entities.models';
import { urls } from '../../constants/urls.constants';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(urls.category);
  }

  public getById(id: string): Observable<ICategory> {
    return this.http.get<ICategory>(`${urls.category}/${id}`);
  }
}
