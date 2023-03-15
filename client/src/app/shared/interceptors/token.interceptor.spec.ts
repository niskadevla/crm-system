import { TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';

import { AuthService } from '../services/api-services/auth.service';

import { TokenInterceptor } from './token.interceptor';

describe('TokenInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [TokenInterceptor, MockProvider(AuthService)]
    })
  );

  it('should be created', () => {
    const interceptor: TokenInterceptor = TestBed.inject(TokenInterceptor);

    expect(interceptor).toBeTruthy();
  });
});
