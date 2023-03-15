import { CategoriesModel } from './category.mongo';
import { ICategory } from '../../entities';
import { ExcludedQuery } from '../../utils';

export const getCategoriesByFilter = async (filter: any): Promise<any> => {
  return CategoriesModel.find(filter, ExcludedQuery);
};

export const getCategoryById = async (id: string): Promise<any> => {
  return CategoriesModel.findById(id);
};

export const removeCategory = async (filter: any): Promise<any> => {
  return CategoriesModel.remove(filter);
};

export const createCategory = async (category: ICategory): Promise<any> => {
  return new CategoriesModel(category).save();
};

export const updateCategory = async (filter: any, updatedCategory: Partial<ICategory>) => {
  return CategoriesModel.findOneAndUpdate(filter, { $set: updatedCategory }, { new: true });
};
