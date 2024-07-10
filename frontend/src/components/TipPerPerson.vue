<script setup lang="ts">
import { usePaymentStore } from '../store/payment';
import { useUiStore } from '../store/ui';

const usePayment = usePaymentStore()
const useUi = useUiStore()

const handleEditTotalPeople = () => {
  if(usePayment.totalTip <= 0)
  {
    alert('Primero agregar un tipo total')
    useUi.setNumPadActive(true, 'total-tip')
    return
  }
  useUi.setNumPadActive(true, 'tip-per-person')
}
</script>

<template>
  <div class="text-lg  text-start mt-7">
    <h4 class="font-bold leading-tight ">
      ¿Entre cuántos quieres dividir las propinas?
    </h4>
    <div class="flex justify-between items-center gap-5 py-5 pb-0">
      <div
        class="rounded-2xl p-2 px-4 font-bold border border-black w-[100px] bg-white cursor-pointer hover:bg-black/5 transition-all duration-200 truncate"
        @click="handleEditTotalPeople"
      >
        {{ usePayment.totalPeople || '#' }}
      </div>
      <span class="text-primary font-bold"
        >${{ usePayment.getAmountTotalPerPerson }} x Persona</span
      >
    </div>
  </div>
</template>

<style>
input[type="number"] {
  -mox-appearance: textfield;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
