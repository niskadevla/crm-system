import { PositionsModel } from './schemas/position.mongo';
import { IPosition } from '../entities/interfaces/position.interfaces';

export const findPositionsByFilter = async (filter: Partial<IPosition>): Promise<any> => {
  return PositionsModel.find(filter);
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
