import { TestBed } from '@angular/core/testing';

import { PositionsFacade } from './positions-facade.service';

describe('PositionsFacadeService', () => {
  let service: PositionsFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PositionsFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
