import { errorHandler, IGetRequest, IParamId, IPostWithFileRequest } from '../utils';
import {
  createCategory,
  getCategoriesByFilter,
  getCategoryById,
  removeCategory,
  updateCategory
} from '../models/category.models';
import { removePosition } from '../models/position.models';
import { ICategory } from '../entities';

export const httpGetAll = async ({ user }: IGetRequest, res: any) => {
  try {
    const categories = await getCategoriesByFilter({ user: user?.id });

    return res.status(200).json(categories);
  } catch (e: unknown) {
    errorHandler(res, e as Error);
  }
};

export const httpGetById = async ({ params: { id } }: Required<IGetRequest<IParamId>>, res: any) => {
  try {
    const category = await getCategoryById(id);

    return res.status(200).json(category);
  } catch (e: unknown) {
    errorHandler(res, e as Error);
  }
};

export const httpRemove = async ({ params: { id } }: Required<IGetRequest<IParamId>>, res: any) => {
  try {
    const category = await removeCategory({ _id: id });
    await removePosition({ category: id });

    return res.status(200).json(category);
  } catch (e: unknown) {
    errorHandler(res, e as Error);
  }
};

export const httpCreate = async ({ body, user, file }: IPostWithFileRequest<Pick<ICategory, 'name'>>, res: any) => {
  try {
    const category = {
      name: body.name,
      user: user?.id,
      imageSrc: file ? file.path : ''
    };
    const newCategory = await createCategory(category);

    res.status(201).json(newCategory);
  } catch (e: unknown) {
    errorHandler(res, e as Error);
  }
};

export const httpUpdate = async (
  { body, params, file }: IPostWithFileRequest<Pick<ICategory, 'name'>, IParamId>,
  res: any
) => {
  try {
    const updated: Partial<ICategory> = {
      name: body.name,
      imageSrc: file?.path || ''
    };
    const filter = { _id: params?.id };

    const category = await updateCategory(filter, updated);

    return res.status(200).json(category);
  } catch (e: unknown) {
    errorHandler(res, e as Error);
  }
};
