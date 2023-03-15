import { TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';

import { AuthService } from '../api-services/auth.service';
import { LocalStorageService } from '../local-storage.service';

import { AuthFacade } from './auth-facade.service';

describe('AuthFacade', () => {
  let service: AuthFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockProvider(AuthService), MockProvider(LocalStorageService)]
    });
    service = TestBed.inject(AuthFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
