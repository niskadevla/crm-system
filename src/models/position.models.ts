import { PositionsModel } from './schemas/position.mongo';
import { IPosition } from '../entities';

export const getPositionsByFilter = async (filter: Partial<IPosition>): Promise<any> => {
  return PositionsModel.find(filter, {
    _id: 0,
    __v: 0
  });
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
