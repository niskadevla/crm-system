import mongoose, { Schema } from 'mongoose';

const usersSchema = new Schema({
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
    ref: 'Users',
    type: Schema.Types.ObjectId
  }
});

export const OrdersModel = mongoose.model('Orders', usersSchema);
