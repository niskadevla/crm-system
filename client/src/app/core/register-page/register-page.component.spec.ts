import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialService } from '../../shared/services/material.service';
import { materialServiceMock } from '../../shared/mocks/material-service.mock';
import { AuthFacade } from '../../shared/services/facades/auth-facade.service';
import { authFacadeMock } from '../../shared/mocks/auth-facade.mock';

import { RegisterPageComponent } from './register-page.component';

describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPageComponent],
      providers: [
        {
          provide: MaterialService,
          useValue: materialServiceMock
        },
        {
          provide: AuthFacade,
          useValue: authFacadeMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
