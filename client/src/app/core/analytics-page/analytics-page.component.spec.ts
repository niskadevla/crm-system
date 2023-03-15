import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsFacade } from '../../shared/services/facades/analytics-facade.service';
import { analyticsFacadeMock } from '../../shared/mocks/analytics-facade.mock';

import { AnalyticsPageComponent } from './analytics-page.component';

describe('AnalyticsPageComponent', () => {
  let component: AnalyticsPageComponent;
  let fixture: ComponentFixture<AnalyticsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsPageComponent],
      providers: [
        {
          provide: AnalyticsFacade,
          useValue: analyticsFacadeMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyticsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
