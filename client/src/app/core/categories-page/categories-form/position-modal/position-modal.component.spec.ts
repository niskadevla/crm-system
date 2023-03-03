import { ComponentFixture, TestBed } from '@angular/core/testing';

import { materialServiceMock } from '../../../../shared/mocks/material-service.mock';
import { MaterialService } from '../../../../shared/services/material.service';

import { PositionModalComponent } from './position-modal.component';

describe('PositionModalComponent', () => {
  let component: PositionModalComponent;
  let fixture: ComponentFixture<PositionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionModalComponent],
      providers: [
        {
          provide: MaterialService,
          useValue: materialServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PositionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
