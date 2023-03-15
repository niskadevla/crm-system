import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { AuthFacade } from './shared/services/facades/auth-facade.service';
import { authFacadeMock } from './shared/mocks/auth-facade.mock';
import { LoaderService } from './shared/services/loader.service';
import { loaderServiceMock } from './shared/mocks/loader-service.mock';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [
        {
          provide: AuthFacade,
          useValue: authFacadeMock
        },
        {
          provide: LoaderService,
          useValue: loaderServiceMock
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  /*it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('client app is running!');
  });*/
});
