import mongoose, { Schema } from 'mongoose';

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    default: ''
  },
  user: {
    ref: 'Users',
    type: Schema.Types.ObjectId
  }
});

export const CategoriesModel = mongoose.model('Categories', categorySchema);