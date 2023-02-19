const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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

module.exports = mongoose.model('Orders', usersSchema);