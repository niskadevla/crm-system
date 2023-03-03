import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialService } from '../../shared/services/material.service';
import { materialServiceMock } from '../../shared/mocks/material-service.mock';
import { AnalyticsFacade } from '../../shared/services/facades/analytics-facade.service';
import { analyticsFacadeMock } from '../../shared/mocks/analytics-facade.mock';

import { OverviewPageComponent } from './overview-page.component';

describe('OverviewPageComponent', () => {
  let component: OverviewPageComponent;
  let fixture: ComponentFixture<OverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewPageComponent],
      providers: [
        {
          provide: MaterialService,
          useValue: materialServiceMock
        },
        {
          provide: AnalyticsFacade,
          useValue: analyticsFacadeMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
