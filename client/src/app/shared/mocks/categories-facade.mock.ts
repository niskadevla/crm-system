import { of } from 'rxjs';

import { CategoriesFacade } from '../services/facades/categories-facade.service';

import { categoryMock } from './entities.mock';

export const categoriesFacadeMock: CategoriesFacade = {
  getAllCategories: of([categoryMock]),
  getCategoryById: jest.fn().mockReturnValue(of(categoryMock)),
  createCategory: jest.fn().mockReturnValue(of(categoryMock)),
  updateCategory: jest.fn().mockReturnValue(of(categoryMock)),
  deleteCategory: jest.fn().mockReturnValue(of(categoryMock))
} as unknown as CategoriesFacade;
