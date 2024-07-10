import { onMounted, ref } from 'vue';
import { usePaymentStore } from '../store/payment';
import { getAllPayments } from '../service/payment';

export const useInitData = () => {
  const loading = ref<boolean>(true);
  const usePayment = usePaymentStore();

  onMounted(async () => {
    loading.value = true;

    const data = await getAllPayments();

    usePayment.$patch({
      paymentList: data,
    });

    loading.value = false;
  });

  return {
    loading,
  };
};
