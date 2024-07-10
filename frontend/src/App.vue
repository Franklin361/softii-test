<script setup lang="ts">

import NavBar from './components/NavBar.vue'
import NumberPad from './components/NumberPad.vue'
import PaymentList from './components/PaymentList.vue'
import PaymentSummary from './components/PaymentSummary.vue'
import TipPaymentOptions from './components/TipPaymentOptions.vue'

import { useInitData } from './composables/useInitData'

const { loading } = useInitData()
</script>

<template>
  <div class="">
    <NavBar />
    <div
      v-if="loading"
      class=" w-screen min-h-[400px] grid place-items-center"
    >
      <span class="animate-pulse">Loading payments...</span>
    </div>
    <template v-else>
      <main class="p-5 my-5 ">
        <div
          class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 max-w-6xl mx-auto"
        >
          <TipPaymentOptions />
          <NumberPad />
          <PaymentList />
        </div>
      </main>
      <PaymentSummary />
    </template>
  </div>
</template>
