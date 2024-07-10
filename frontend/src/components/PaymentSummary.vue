<script setup lang="ts">
import { cn, getFormattedNumber } from '../lib/utils';
import { usePaymentStore } from '../store/payment';

const usePayment = usePaymentStore()

const handleAddNewPayment = () => {
  if(!usePayment.payMethodSelected) {
    alert('Selecciona un método de pago Primero')
    return
  }

  if((usePayment.totalTip - (usePayment.getTotalPaid + (usePayment.totalTip / usePayment.totalPeople))) < 0){
    alert('La propina es insuficiente')
    return
  }

  usePayment.addNewPaymentToList({
    id: crypto.randomUUID(),
    amount: usePayment.totalTip / usePayment.totalPeople,
    paidMethod: usePayment.payMethodSelected?.method,
    label: usePayment.payMethodSelected?.label
  })

  usePayment.setTotalPeople(0)
  usePayment.setPayMethod(null)

}
</script>

<template>
  <footer>
    <div
      class="flex justify-between items-center lg:gap-20 gap-10 p-5 text-2xl max-w-6xl mx-auto pb-16 lg:flex-row flex-col"
    >
      <div class="flex-1 space-y-2">
        <div
          class="flex justify-between items-center gap-5 font-bold text-primary"
        >
          <span>Total pagado</span>
          <span>${{ getFormattedNumber(usePayment.getTotalPaid) }}</span>
        </div>
        <div class="flex justify-between items-center gap-5 font-bold">
          <span>Restante por pagar</span>
          <span
            >${{ getFormattedNumber(usePayment.totalTip- usePayment.getTotalPaid)  }}</span
          >
        </div>
      </div>
      <button
        :class="cn(
          'flex-1 rounded-full p-4 font-semibold select-none lg:w-auto w-full',
          (usePayment.totalPeople > 0 && usePayment.totalTip > 0 && usePayment.payMethodSelected) ? 'bg-primary opacity-100 text-white border-transparent pointer-events-auto  active:bg-primary/90 transition-all duration-200 outline outline-2 outline-offset-4 outline-transparent hover:outline-primary': 'border border-black opacity-50 pointer-events-none'
        )"
        @click="handleAddNewPayment"
      >
        {{   usePayment.totalPeople > 0 && usePayment.totalTip > 0 ? `Pagar $${usePayment.getAmountTotalPerPerson} en propinas` : 'Pagar propinas'  }}
      </button>
    </div>
  </footer>
</template>
