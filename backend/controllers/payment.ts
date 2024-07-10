import { Request, Response } from 'express';
import { db } from '../database/config';
import { Payment, payments } from '../schema/payment';
import { eq } from 'drizzle-orm';

export const getAllPayments = async (_req: Request, res: Response) => {
  const data = await db.select().from(payments);
  return res.json(data);
};

export const removePaymentById = async (req: Request, res: Response) => {
  const id = +req.params.id as Payment['id'];

  const payment = await db.select().from(payments).where(eq(payments.id, id));

  if (!payment || payment.length <= 0) {
    return res
      .status(400)
      .json({ errors: { payment: 'Payment does not exist' } });
  }

  await db.delete(payments).where(eq(payments.id, id));

  return res.status(202).send('Deleted');
};

export const createNewPayment = async (req: Request, res: Response) => {
  const body = req.body as Payment;
  const data = await db.insert(payments).values(body).returning();
  return res.status(201).json(data[0]);
};
