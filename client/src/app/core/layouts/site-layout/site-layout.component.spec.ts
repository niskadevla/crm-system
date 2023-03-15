import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MaterialService } from '../../../shared/services/material.service';
import { materialServiceMock } from '../../../shared/mocks/material-service.mock';
import { AuthFacade } from '../../../shared/services/facades/auth-facade.service';
import { authFacadeMock } from '../../../shared/mocks/auth-facade.mock';

import { SiteLayoutComponent } from './site-layout.component';

describe('SiteLayoutComponent', () => {
  let component: SiteLayoutComponent;
  let fixture: ComponentFixture<SiteLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SiteLayoutComponent],
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

    fixture = TestBed.createComponent(SiteLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
