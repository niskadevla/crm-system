import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subscription, take } from 'rxjs';

import { PositionsFacade } from '../../../../shared/services/facades/positions-facade.service';
import { IPosition } from '../../../../shared/models/entities.models';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { PositionModalComponent } from '../position-modal/position-modal.component';
import { MaterialService } from '../../../../shared/services/material.service';

@Component({
  selector: 'app-positions-form',
  standalone: true,
  imports: [CommonModule, LoaderComponent, PositionModalComponent],
  templateUrl: './positions-form.component.html',
  styleUrls: ['./positions-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PositionsFormComponent implements OnInit, OnDestroy {
  @ViewChild('positionModal') public positionModal!: PositionModalComponent;

  @Input() public categoryId!: string;

  public currency = '$';
  public loading = false;
  public positions!: IPosition[];
  public currentPosition!: IPosition;

  private subscription = new Subscription();

  constructor(
      private readonly positionsFacade: PositionsFacade,
      private readonly materialService: MaterialService,
      private readonly cdr: ChangeDetectorRef
  ) {
  }

  public ngOnInit(): void {
    this.getAllPositions();
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public onAddPosition(): void {
    this.positionModal.onAddPosition();
  }

  public onSelectPosition(position: IPosition): void {
    this.currentPosition = {...position};
  }

  public onDeletePosition(event: Event, position: IPosition): void {
    event.stopPropagation();
    const decision = window.confirm(`Do you want to delete position "${position.name}"`)

    if (decision) {
      this.loading = true;
      this.subscription.add(
          this.positionsFacade.deletePosition(position)
              .pipe(take(1))
              .subscribe({
                next: () => {
                  this.getAllPositions();
                  this.materialService.toast('Successfully deleted.')
                },
                error: err => this.materialService.toast(err.error?.message)
              })
      )
    }
  }

  public onCreate(position: IPosition) {
    this.loading = true;
    this.subscription.add(
        this.positionsFacade.createPosition(position)
            .pipe(take(1))
            .subscribe({
              next: () => {
                this.getAllPositions();
                this.materialService.toast('Position`s been created.')
              },
              error: err => this.materialService.toast(err.error?.message),
              complete: () => this.positionModal.completed()
            })
    );
  }

  public onUpdate(position: IPosition) {
    this.loading = true;
    this.subscription.add(
        this.positionsFacade.updatePosition(position)
            .pipe(take(1))
            .subscribe({
              next: () => {
                this.getAllPositions();
                this.materialService.toast('Changes`s been updated.')
              },
              error: err => this.materialService.toast(err.error?.message),
              complete: () => this.positionModal.completed()
            })
    );
  }

  private getAllPositions(): void {
    this.loading = true;
    this.positionsFacade.getPositionsByCategoryId(this.categoryId)
        .pipe(take(1))
        .subscribe((positions: IPosition[]) => {
          this.positions = positions;
          this.loading = false;

          this.cdr.markForCheck();
        });
  }
}
