import { Pipe, PipeTransform } from '@angular/core';

import { IOrderPosition } from '../../models/entities.models';
import { MIN_QUANTITY } from '../../../core/order-page/consts/order-page.consts';

@Pipe({
  name: 'computePrice'
})
export class ComputePricePipe implements PipeTransform {

  transform(list: IOrderPosition[]): number {
    return list.reduce((total: number, {
      quantity = MIN_QUANTITY,
      cost
    }: IOrderPosition) => (total += quantity * cost), 0);
  }

}
