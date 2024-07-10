import { Router } from 'express';
import { body, param } from 'express-validator';
import {
  getAllPayments,
  createNewPayment,
  removePaymentById,
} from '../controllers';
import { fieldsValidation } from '../middleware';

const router = Router();

router.get('/get-all-payments', getAllPayments);

router.post(
  '/create-new-payment',
  [
    body('label', 'Label is required').notEmpty(),
    body('paymentMethod', 'Payment Method is required').notEmpty(),
    body('amount', 'Amount is required').notEmpty().isInt(),
    fieldsValidation,
  ],
  createNewPayment
);

router.delete(
  '/remove-payment/:id',
  [param('id', 'Payment Id iss required'), fieldsValidation],
  removePaymentById
);

export default router;
