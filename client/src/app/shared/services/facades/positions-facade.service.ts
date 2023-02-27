import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { IPosition } from '../../models/entities.models';
import { PositionService } from '../api-services/position.service';

@Injectable({
  providedIn: 'root'
})
export class PositionsFacade {

  constructor(private readonly positionsApi: PositionService) { }

  public getPositionsByCategoryId(categoryId: string): Observable<IPosition[]> {
    return this.positionsApi.getPositionsByCategoryId(categoryId);
  }

  public createPosition(position: IPosition): Observable<IPosition> {
    return this.positionsApi.createPosition(position);
  }

  public updatePosition(position: IPosition): Observable<IPosition> {
    return this.positionsApi.updatePosition(position);
  }

  public deletePosition(position: IPosition): Observable<IPosition> {
    return this.positionsApi.deletePosition(position);
  }
}
