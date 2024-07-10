<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import NumberPad from './components/NumberPad.vue'
import PaymentList from './components/PaymentList.vue'
import PaymentSummary from './components/PaymentSummary.vue'
import TipPaymentOptions from './components/TipPaymentOptions.vue'
</script>

<template>
  <div class="">
    <NavBar />
    <main class="p-5 my-5 ">
      <div class="grid grid-cols-3 gap-10  max-w-6xl mx-auto">
        <TipPaymentOptions />
        <NumberPad />
        <PaymentList />
      </div>
    </main>
    <PaymentSummary />
  </div>
</template>
