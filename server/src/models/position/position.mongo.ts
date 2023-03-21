import mongoose, { Schema } from 'mongoose';

import { DbModelNames } from '../../entities';

const positionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  category: {
    ref: DbModelNames.Categories,
    type: Schema.Types.ObjectId
  },
  user: {
    ref: DbModelNames.Users,
    type: Schema.Types.ObjectId
  }
});

export const PositionsModel = mongoose.model(DbModelNames.Positions, positionSchema);
