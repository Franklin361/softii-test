import { defineStore, acceptHMRUpdate } from 'pinia';
import { computed, ref } from 'vue';
import { getFormattedNumber } from '../lib/utils';

interface PaymentItem {
  id: number;
  paymentMethod: string;
  label: string;
  amount: number;
}

interface PayMethod {
  id: string;
  label: string;
  method: string;
}

export const usePaymentStore = defineStore('payment', () => {
  const totalTip = ref(0);
  const totalPeople = ref(0);
  const payMethodSelected = ref<PayMethod | null>(null);

  const paymentList = ref<PaymentItem[]>([]);

  const getAmountTotalPerPerson = computed(() =>
    getFormattedNumber(
      totalTip.value > 0 && totalPeople.value > 0
        ? totalTip.value / totalPeople.value
        : 0
    )
  );

  const getTotalPaid = computed(() => {
    const total = paymentList.value.reduce(
      (prev, next) => prev + next.amount,
      0
    );
    return total;
  });

  const setNewPaid = (value: number) => {
    totalTip.value = value;
  };

  const setTotalPeople = (value: number) => {
    totalPeople.value = value;
  };

  const setPayMethod = (payMethod: PayMethod | null) => {
    payMethodSelected.value = payMethod;
  };

  const addNewPaymentToList = (payment: PaymentItem) => {
    paymentList.value.unshift(payment);
  };

  const removePaymentFromList = (id: PaymentItem['id']) => {
    paymentList.value = paymentList.value.filter((item) => item.id !== id);
  };

  return {
    totalPeople,
    totalTip,
    getTotalPaid,
    getAmountTotalPerPerson,
    setNewPaid,
    setTotalPeople,
    setPayMethod,
    paymentList,
    addNewPaymentToList,
    removePaymentFromList,
    payMethodSelected,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePaymentStore, import.meta.hot));
}
