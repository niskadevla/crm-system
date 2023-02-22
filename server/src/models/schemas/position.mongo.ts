import mongoose, { Schema } from 'mongoose';

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
    ref: 'Categories',
    type: Schema.Types.ObjectId
  },
  user: {
    ref: 'Users',
    type: Schema.Types.ObjectId
  }
});

export const PositionsModel = mongoose.model('Positions', positionSchema);
