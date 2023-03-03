import { MaterialDatepicker, MaterialInstance, MaterialService } from '../services/material.service';

export const materialInstanceMock: MaterialInstance = {
  open: jest.fn(),
  close: jest.fn(),
  destroy: jest.fn()
};

export const materialDatepickerMock: MaterialDatepicker = {
  ...materialInstanceMock
};

export const materialServiceMock: MaterialService = {
  toast: jest.fn(),
  initializeFloatingButton: jest.fn(),
  updateTextInputs: jest.fn(),
  initModal: jest.fn().mockReturnValue(materialInstanceMock),
  initTooltip: jest.fn().mockReturnValue(materialInstanceMock),
  initDatepicker: jest.fn().mockReturnValue(materialDatepickerMock),
  initTapTarget: jest.fn().mockReturnValue(materialInstanceMock)
};
