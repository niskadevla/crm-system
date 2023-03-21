import mongoose, { Schema } from 'mongoose';

import { DbModelNames } from '../../entities';

const ordersSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  order: {
    type: Number,
    required: true
  },
  list: [
    {
      name: {
        type: String
      },
      quantity: {
        type: Number
      },
      cost: {
        type: Number
      }
    }
  ],
  user: {
    ref: DbModelNames.Users,
    type: Schema.Types.ObjectId
  }
});

  export const OrdersModel = mongoose.model(DbModelNames.Orders, ordersSchema);
