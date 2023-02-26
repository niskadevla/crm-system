import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';

import { catchError, filter, Observable, of, Subscription, switchMap, tap, throwError } from 'rxjs';

import { ROUTE_CONFIGS } from '../../../shared/constants/route.constants';
import { CategoriesFormControlsEnums } from '../enums/categories-form.enums';
import { PositionsFormComponent } from './positions-form/positions-form.component';
import { CategoriesFacade } from '../../../shared/services/facades/categories-facade.service';
import { ICategory } from '../../../shared/models/entities.models';
import { MaterialService } from '../../../shared/services/material.service';

@Component({
  selector: 'app-categories-form',
  standalone: true,
  imports: [CommonModule, PositionsFormComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesFormComponent implements OnInit, OnDestroy {
  @ViewChild('inputFile') inputFileRef!: ElementRef;

  public categoriesFormControlsEnums = CategoriesFormControlsEnums;
  public formCategories!: FormGroup;
  public routeConfigs = ROUTE_CONFIGS;
  public isNew = true;
  public imagePreview = '';
  public category!: ICategory;

  private subscription = new Subscription();
  private image!: File;

  public get nameControl(): AbstractControl {
    return this.formCategories.get(CategoriesFormControlsEnums.Name) as AbstractControl;
  }

  public get isInvalid(): boolean {
    return this.nameControl.invalid && this.nameControl.touched;
  }

  public get isDisabled(): boolean {
    return this.formCategories.invalid || this.formCategories.disabled;
  }

  constructor(
      private readonly fb: FormBuilder,
      private readonly route: ActivatedRoute,
      private readonly categoriesFacade: CategoriesFacade,
      private readonly materialService: MaterialService,
      private readonly cdr: ChangeDetectorRef
  ) {
  }

  public ngOnInit(): void {
    this.initForm();
    this.initRouteListener();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public deleteCategory(): void {

  }

  public onSubmit(): void {

  }

  public onFileUpload($event: any): void {
  }

  public triggerClick(): void {
    this.inputFileRef.nativeElement.click();
  }

  private initForm(): void {
    this.formCategories = this.fb.group({
      [CategoriesFormControlsEnums.Name]: [null]
    })
  }

  private initRouteListener(): void {
    this.formCategories.disable();

    this.subscription.add(
        this.route.params
            .pipe(
                switchMap(this.getCategoryById.bind(this)),
                tap(() => this.formCategories.enable()),
                filter<ICategory | null>(Boolean),
                tap(this.setCategoryValue.bind(this)),
                catchError((error: any) => {
                  this.materialService.toast(error.error?.message || '');

                  return throwError(() => of(null))
                }),
            )
            .subscribe(() => {
              this.cdr.markForCheck();
            })
    );
  }

  private getCategoryById(params: Params): Observable<ICategory | null> {
    if (params['id']) {
      this.isNew = false;

      return this.categoriesFacade.getCategoryById(params['id']);
    }

    return of(null);
  }

  private setCategoryValue(category: ICategory): void {
    this.category = category;
    this.imagePreview = category.imageSrc ?? '';

    this.formCategories.patchValue({
      name: category.name
    });
    this.materialService.updateTextInputs();
  }
}
