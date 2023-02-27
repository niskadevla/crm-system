import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { PositionsFromControlsEnum } from '../../enums/categories-form.enums';
import { MaterialInstance, MaterialService } from '../../../../shared/services/material.service';
import { IPosition } from '../../../../shared/models/entities.models';

@Component({
  selector: 'app-position-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './position-modal.component.html',
  styleUrls: ['./position-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PositionModalComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @ViewChild('modal') modalRef!: ElementRef;

  @Input() categoryId!: string;
  @Input() public position: IPosition | null = null;

  @Output() public onCreate = new EventEmitter<IPosition>();
  @Output() public onUpdate = new EventEmitter<IPosition>();

  public positionsFromControlsEnum = PositionsFromControlsEnum;
  public minCost = 1;
  public form!: FormGroup;

  private modal!: MaterialInstance;

  public get nameControl(): AbstractControl {
    return this.form?.get(PositionsFromControlsEnum.Name) as AbstractControl;
  }

  public get costControl(): AbstractControl {
    return this.form?.get(PositionsFromControlsEnum.Cost) as AbstractControl;
  }

  public get isNameInvalid(): boolean {
    return this.nameControl?.invalid && this.nameControl?.touched;
  }

  public get isCostInvalid(): boolean {
    return this.costControl?.invalid && this.costControl?.touched;
  }

  public get isDisabledSaveBtn(): boolean {
    return this.form?.invalid || this.form?.disabled;
  }

  public get isDisabledCancelBtn(): boolean {
    return this.form?.disabled;
  }

  private get isEditMode(): boolean {
    return !!this.position;
  }

  constructor(
      private readonly fb: FormBuilder,
      private materialService: MaterialService
  ) {
  }

  public ngOnInit(): void {
    this.initForm();
  }

  public ngOnDestroy(): void {
    this.modal?.destroy();
  }

  public ngAfterViewInit(): void {
    this.initModal();
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['position'] && this.position) {
      this.onSelectPosition(this.position);
    }
  }

  public cancel(): void {
    this.modal.close();
  }

  public onAddPosition(): void {
    this.position = null;
    this.form.reset({name: null, cost: this.minCost});
    this.modal.open();
    this.materialService.updateTextInputs();
  }

  public onSelectPosition({_id, name, cost}: IPosition): void {
    this.form.patchValue({name, cost});
    this.modal.open();
    this.materialService.updateTextInputs();
  }

  public submit(): void {
    this.form.disable();

    const newPosition: IPosition = {
      ...this.form.value,
      category: this.categoryId
    }

    if (this.isEditMode) {
      newPosition._id = this.position?._id;

      this.onUpdate.emit(newPosition);
    } else {
      this.onCreate.emit(newPosition);
    }
  }

  public completed(): void {
    this.modal.close();
    this.form.reset({name: '', cost: this.minCost});
    this.form.enable();
  }

  private initForm(): void {
    this.form = this.fb.group({
      [PositionsFromControlsEnum.Name]: [null, [Validators.required]],
      [PositionsFromControlsEnum.Cost]: [this.minCost, [Validators.required, Validators.min(this.minCost)]]
    })
  }

  private initModal(): void {
    this.modal = this.materialService.initModal(this.modalRef);
  }
}
