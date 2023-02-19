const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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

module.exports = mongoose.model('Positions', positionSchema);