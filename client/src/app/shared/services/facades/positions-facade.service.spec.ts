import { TestBed } from '@angular/core/testing';

import { MockProvider } from 'ng-mocks';

import { PositionService } from '../api-services/position.service';

import { PositionsFacade } from './positions-facade.service';

describe('PositionsFacadeService', () => {
  let service: PositionsFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockProvider(PositionService)]
    });
    service = TestBed.inject(PositionsFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
