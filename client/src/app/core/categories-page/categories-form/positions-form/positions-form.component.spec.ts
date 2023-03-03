import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialService } from '../../../../shared/services/material.service';
import { materialServiceMock } from '../../../../shared/mocks/material-service.mock';
import { PositionsFacade } from '../../../../shared/services/facades/positions-facade.service';
import { positionsFacadeMock } from '../../../../shared/mocks/position-facade.mock';

import { PositionsFormComponent } from './positions-form.component';

describe('PositionsFormComponent', () => {
  let component: PositionsFormComponent;
  let fixture: ComponentFixture<PositionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionsFormComponent],
      providers: [
        {
          provide: MaterialService,
          useValue: materialServiceMock
        },
        {
          provide: PositionsFacade,
          useValue: positionsFacadeMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PositionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
