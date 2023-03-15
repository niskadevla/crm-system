import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialService } from '../../../../shared/services/material.service';
import { materialServiceMock } from '../../../../shared/mocks/material-service.mock';

import { HistoryFilterComponent } from './history-filter.component';

describe('HistoryFilterComponent', () => {
  let component: HistoryFilterComponent;
  let fixture: ComponentFixture<HistoryFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryFilterComponent],
      providers: [
        {
          provide: MaterialService,
          useValue: materialServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
