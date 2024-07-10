<script setup lang="ts">
import { usePaymentStore } from '../store/payment';
import { useUiStore } from '../store/ui';
import { getFormattedNumber } from '../lib/utils';

const usePayment = usePaymentStore()
const useUi = useUiStore()

const handleEditTip = () => {
  useUi.setNumPadActive(true, 'total-tip')
}
</script>

<template>
  <div class="flex gap-3 items-center  justify-center">
    <div class="flex flex-col gap-1 items-start relative text-primary ">
      <span class="text-sm leading-none absolute -top-5 left-0"
        >Total de propinas</span
      >
      <span
        class="p-2 text-4xl font-semibold bg-primary/20 rounded-md min-w-[200px] text-end"
        >$ {{ getFormattedNumber(usePayment.totalTip) }}</span
      >
    </div>
    <button
      class="grid place-items-center border h-full flex-none hover:bg-primary hover:text-white transition-all active:bg-primary/80 p-2 rounded-full duration-200"
      @click="handleEditTip"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
        />
        <path d="m15 5 4 4" />
      </svg>
    </button>
  </div>
</template>
