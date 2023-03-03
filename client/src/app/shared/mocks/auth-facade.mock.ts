import { of } from 'rxjs';

import { AuthFacade } from '../services/facades/auth-facade.service';

import { tokenMock, userMock } from './entities.mock';

export const authFacadeMock: AuthFacade = {
  login: jest.fn().mockReturnValue(of(tokenMock)),
  register: jest.fn().mockReturnValue(of(userMock)),
  initToken: jest.fn()
} as unknown as AuthFacade;
