const baseURL = import.meta.env.VITE_API_URL as string;

interface Payment {
  id: number;
  label: string;
  paymentMethod: string;
  amount: number;
}

export const getAllPayments = async (): Promise<Payment[]> => {
  try {
    const url = `${baseURL}/api/payment/get-all-payments`;
    const res = await fetch(url);
    return (await res.json()) as Payment[];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createNewPayment = async (
  input: Omit<Payment, 'id'>
): Promise<Payment | null> => {
  try {
    const url = `${baseURL}/api/payment/create-new-payment`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });
    return (await res.json()) as Payment;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deletePaymentById = async (
  id: Payment['id']
): Promise<Boolean> => {
  try {
    1;
    const url = `${baseURL}/api/payment/remove-payment/${id}`;
    const res = await fetch(url, {
      method: 'DELETE',
    });
    console.log(res.status, res.ok);
    return res.status === 202 && res.ok;
  } catch (error) {
    console.log(error);
    return false;
  }
};
