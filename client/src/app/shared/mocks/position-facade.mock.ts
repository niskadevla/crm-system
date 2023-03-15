import { of } from 'rxjs';

import { PositionsFacade } from '../services/facades/positions-facade.service';

import { positionMock } from './entities.mock';

export const positionsFacadeMock: PositionsFacade = {
  getPositionsByCategoryId: jest.fn().mockReturnValue(of([positionMock])),
  createPosition: jest.fn().mockReturnValue(of(positionMock)),
  updatePosition: jest.fn().mockReturnValue(of(positionMock)),
  deletePosition: jest.fn().mockReturnValue(of(positionMock))
} as unknown as PositionsFacade;
