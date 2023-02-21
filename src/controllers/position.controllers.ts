import { errorHandler, IGetRequest, IJwtRequest, IParamId, IPostRequest } from '../utils';
import { createPosition, findPositionsByFilter, removePosition, updatePosition } from '../models/position.models';
import { IPosition } from '../entities/interfaces/position.interfaces';

export const httpGetByCategoryId = async (
  { params, user }: IGetRequest<{ categoryId: string }, IJwtRequest>,
  res: any
) => {
  try {
    const payload: Partial<IPosition> = {
      category: +params.categoryId,
      user: user?.id
    };
    const positions = await findPositionsByFilter(payload);

    return res.status(200).json(positions);
  } catch (e: unknown) {
    errorHandler(res, e as Error);
  }
};

export const httpRemove = async ({ params }: IGetRequest<IParamId>, res: any) => {
  try {
    const position = await removePosition({ _id: params.id });

    return res.status(200).json(position);
  } catch (e: unknown) {
    errorHandler(res, e as Error);
  }
};

export const httpCreate = async ({ body, user }: IPostRequest<Omit<IPosition, 'user'>>, res: any) => {
  try {
    const payload: IPosition = {
      name: body.name,
      cost: body.cost,
      category: +body.category,
      user: user?.id
    };
    const position = await createPosition(payload);

    return res.status(200).json(position);
  } catch (e: unknown) {
    errorHandler(res, e as Error);
  }
};

export const httpUpdate = async ({ body, params }: IPostRequest<Omit<IPosition, 'user'>, IParamId>, res: any) => {
  try {
    const position = await updatePosition({ _id: params?.id }, body );

    res.status(200).json(position);
  } catch (e: unknown) {
    errorHandler(res, e as Error);
  }
};
