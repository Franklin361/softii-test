import { sql } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const payments = sqliteTable('payments', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  label: text('label').notNull(),
  paymentMethod: text('paymentMethod').notNull(),
  amount: integer('amount').notNull(),
  created_at: text('created_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export type Payment = typeof payments.$inferSelect; // return type when queried
export type InsertPayment = typeof payments.$inferInsert; // insert type
