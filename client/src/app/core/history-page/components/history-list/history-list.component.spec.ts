import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialService } from '../../../../shared/services/material.service';
import { materialServiceMock } from '../../../../shared/mocks/material-service.mock';

import { HistoryListComponent } from './history-list.component';

describe('HistoryListComponent', () => {
  let component: HistoryListComponent;
  let fixture: ComponentFixture<HistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryListComponent],
      providers: [
        {
          provide: MaterialService,
          useValue: materialServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
