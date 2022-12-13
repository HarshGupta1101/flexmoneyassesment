import express from 'express';
const Router = express.Router();

// middleware
import { validatePaymentData } from '../middleware';

// Schemas
import { PaymentModel } from '../models/payment';

// Route: /payment/:id
// Description : Making/updating payment info
// params: id
// Access: Public
// Method : put
Router.put('/:id', validatePaymentData, (req, res) => {
  try {
    const completePayment = async () => {
      const { cardno, cvv, amount, otp } = req.body;
      const { id } = req.params;

      await PaymentModel.updateOne(
        {
          user: id,
        },
        {
          $set: {
            cardno,
            cvv,
            amount,
            otp,
          },
        },
        {
          upsert: true,
        }
      );
    };
    completePayment();

    return res.status(201).json({ message: 'Payment Successful' });
  } catch (error) {
    res.json({ error: error.message });
  }
});

export default Router;
