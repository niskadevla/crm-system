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

  public create(name: string, image?: File): Observable<ICategory> {
    const fd: FormData = new FormData();

    if (image) {
      fd.append('image', image, image.name)
    }
    fd.append('name', name);

    return this.http.post<ICategory>(`${urls.category}`, fd);
  }

  public update(id: string, name: string, image?: File): Observable<ICategory> {
    const fd: FormData = new FormData();

    if (image) {
      fd.append('image', image, image.name)
    }
    fd.append('name', name);

    return this.http.patch<ICategory>(`${urls.category}/${id}`, fd);
  }

  public delete(id: string): Observable<ICategory> {
    return this.http.delete<ICategory>(`${urls.category}/${id}`);
  }
}
