<script setup lang="ts">
import { cn } from '../lib/utils';
import { usePaymentStore } from '../store/payment';

const usePayment = usePaymentStore()

const options: { id:string, label: string, typeIcon: 'cash' | 'card' }[] = [
  {
    id:crypto.randomUUID(),
    label: 'Efectivo',
    typeIcon: 'cash'
  },
  {
    id:crypto.randomUUID(),
    label: 'BBVA 1234',
    typeIcon: 'card'
  },
  {
    id:crypto.randomUUID(),
    label: 'Santander 1234',
    typeIcon: 'card'
  },
]
</script>

<template>
  <div class="mt-10">
    <div class="flex items-center gap-3">
      <span>
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
            d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
          />
          <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
        </svg>
      </span>
      <h4 class="text-lg font-bold leading-tight ">Elige el método de pago</h4>
    </div>
    <div class="grid grid-cols-2 gap-3 mt-7">
      <button
        v-for="({ label, typeIcon, id }) in options"
        :key="id"
        :class="cn(
          'border border-black/30 rounded-2xl flex justify-center items-center flex-col gap-3 shadow-lg shadow-black/20 p-4 hover:bg-primary/90 hover:text-white cursor-pointer active:bg-primary transition-all duration-200 bg-white',
          usePayment.payMethodSelected?.id === id && 'text-white bg-primary pointer-events-none'
        )"
        @click="usePayment.setPayMethod({ label, method: typeIcon, id })"
      >
        <span>
          <svg
            v-if="typeIcon === 'card'"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-8"
          >
            <rect
              width="20"
              height="14"
              x="2"
              y="5"
              rx="2"
            />
            <line
              x1="2"
              x2="22"
              y1="10"
              y2="10"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-8"
          >
            <circle
              cx="8"
              cy="8"
              r="6"
            />
            <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
            <path d="M7 6h1v4" />
            <path d="m16.71 13.88.7.71-2.82 2.82" />
          </svg>
        </span>
        <span class="capitalize font-semibold">{{label}}</span>
      </button>
    </div>
  </div>
</template>
