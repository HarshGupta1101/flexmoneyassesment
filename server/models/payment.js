import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema(
  {
    cardno: { type: Number, required: true },
    cvv: { type: Number, required: true },
    amount: { type: Number, required: true },
    user: { type: mongoose.Types.ObjectId, ref: 'users' },
    otp: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const PaymentModel = mongoose.model('payments', PaymentSchema);
