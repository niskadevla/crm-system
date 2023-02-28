import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComputePricePipe } from './compute-price.pipe';

@NgModule({
  declarations: [ComputePricePipe],
  imports: [
    CommonModule
  ],
  exports: [ComputePricePipe]
})
export class ComputePriceModule { }
