import { of } from 'rxjs';

import { LoaderService } from '../services/loader.service';

export const loaderServiceMock: LoaderService = {
  spinner$: of(0),
  increaseSpinner: jest.fn(),
  decreaseSpinner: jest.fn()
} as unknown as LoaderService;
