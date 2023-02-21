import mongoose, { Schema } from 'mongoose';

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

export const UserModel = mongoose.model('Users', usersSchema);
