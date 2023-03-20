import mongoose, { Schema } from 'mongoose';

import { DbModelNames } from '../../entities';

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
    ref: DbModelNames.Users,
    type: Schema.Types.ObjectId
  }
});

export const CategoriesModel = mongoose.model(DbModelNames.Categories, categorySchema);