import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { map, Observable, switchMap } from 'rxjs';

import { IPosition } from '../../../../shared/models/entities.models';
import { PositionsFacade } from '../../../../shared/services/facades/positions-facade.service';
import { OrderService } from '../../services/order.service';
import { MIN_QUANTITY } from '../../consts/order-page.consts';
import { MaterialService } from '../../../../shared/services/material.service';
import { CURRENCY } from '../../../../shared/constants/common.constants';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';

@Component({
  selector: 'app-order-positions',
  standalone: true,
  imports: [CommonModule, RouterModule, LoaderComponent, FormsModule],
  templateUrl: './order-positions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderPositionsComponent implements OnInit {
  public positions$!: Observable<IPosition[]>
  public currency: string = CURRENCY;
  public minQuantity: number = MIN_QUANTITY;

  constructor(
      private readonly route: ActivatedRoute,
      private readonly positionsFacade: PositionsFacade,
      private readonly orderService: OrderService,
      private readonly materialService: MaterialService
  ) {
  }

  public ngOnInit(): void {
    this.initRouteListener();
  }

  public addToOrder(position: IPosition): void {
    this.orderService.addOrderPosition(position);
    this.materialService.toast(`Added x${position.quantity}`)
  }

  private initRouteListener(): void {
    this.positions$ = this.route.params
        .pipe(
            switchMap(this.getAllPositions.bind(this)),
            map(this.positionMapper.bind(this))
        );
  }

  private getAllPositions(params: Params): Observable<IPosition[]> {
    return this.positionsFacade.getPositionsByCategoryId(params['id'])
  }

  private positionMapper(positions: IPosition[]): IPosition[] {
    return positions.map((position: IPosition) => ({...position, quantity: MIN_QUANTITY}));
  }
}
