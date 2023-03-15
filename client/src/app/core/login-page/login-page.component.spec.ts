import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MockModule, MockProvider } from 'ng-mocks';

import { MaterialService } from '../../shared/services/material.service';
import { materialServiceMock } from '../../shared/mocks/material-service.mock';
import { AuthFacade } from '../../shared/services/facades/auth-facade.service';
import { authFacadeMock } from '../../shared/mocks/auth-facade.mock';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockModule(ReactiveFormsModule)],
      declarations: [LoginPageComponent],
      providers: [
        MockProvider(ActivatedRoute),
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

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
