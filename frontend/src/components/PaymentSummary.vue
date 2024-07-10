<script setup lang="ts">
import {cn} from '../lib/utils'
</script>

<template>
  <footer>
    <div
      class="flex justify-between items-center gap-20 p-5 text-2xl max-w-6xl mx-auto pb-16"
    >
      <div class="flex-1 space-y-2">
        <div
          class="flex justify-between items-center gap-5 font-bold text-primary"
        >
          <span>Total pagado</span>
          <span>$0.00</span>
        </div>
        <div class="flex justify-between items-center gap-5 font-bold">
          <span>Restante por pagar</span>
          <span>$1,828.00</span>
        </div>
      </div>
      <button
        :class="cn(
          'flex-1 rounded-full border border-black opacity-50 pointer-events-none p-4 font-semibold',
          'bg-primary opacity-100 text-white border-transparent pointer-events-auto  active:bg-primary/90 transition-all duration-200 outline outline-2 outline-offset-4 outline-transparent hover:outline-primary'
        )"
      >
        Pagar propinas
      </button>
    </div>
  </footer>
</template>
