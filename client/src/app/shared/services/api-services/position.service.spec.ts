import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PositionService } from './position.service';

describe('PositionService', () => {
  let service: PositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
