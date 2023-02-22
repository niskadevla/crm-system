import { PositionsModel } from './position.mongo';
import { IPosition } from '../../entities';
import { ExcludedQuery } from '../../utils';

export const getPositionsByFilter = async (filter: Partial<IPosition>): Promise<any> => {
  return PositionsModel.find(filter, ExcludedQuery);
};

export const createPosition = async (payload: IPosition): Promise<any> => {
  return new PositionsModel(payload).save();
};

export const removePosition = async (filter: any): Promise<any> => {
  return PositionsModel.remove(filter);
};

export const updatePosition = async (filter: any, payload: Partial<IPosition>): Promise<any> => {
  return PositionsModel.findOneAndUpdate(filter, { $set: payload }, { new: true });
};
