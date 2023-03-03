import { TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';

import { AuthService } from '../services/api-services/auth.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockProvider(AuthService)]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
