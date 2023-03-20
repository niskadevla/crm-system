import mongoose, { Schema } from 'mongoose';

import { DbModelNames } from '../../entities';

const usersSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

export const UserModel = mongoose.model(DbModelNames.Users, usersSchema);
