import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    phone: { type: Number, required: true },
    batch: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Statics
UserSchema.methods.getId = function () {
  return this._id.toString();
};

export const UserModel = mongoose.model('users', UserSchema);
