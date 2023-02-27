import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IPosition } from '../../models/entities.models';
import { urls } from '../../constants/urls.constants';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient) { }

  public getPositionsByCategoryId(categoryId: string): Observable<IPosition[]> {
    return this.http.get<IPosition[]>(`${urls.position}/${categoryId}`);
  }

  public createPosition(position: IPosition): Observable<IPosition> {
    return this.http.post<IPosition>(`${urls.position}`, position);
  }

  public updatePosition(position: IPosition): Observable<IPosition> {
    return this.http.patch<IPosition>(`${urls.position}/${position._id}`, position);
  }

  public deletePosition(position: IPosition): Observable<IPosition> {
    return this.http.delete<IPosition>(`${urls.position}/${position._id}`);
  }
}
