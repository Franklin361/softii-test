<script setup lang="ts"></script>

<template>
  <div class="text-lg  text-start mt-7">
    <h4 class="font-bold leading-tight ">
      ¿Entre cuántos quieres dividir las propinas?
    </h4>
    <div class="flex justify-between items-center gap-5 py-5 pb-0">
      <input
        type="number"
        class="rounded-2xl p-2 px-4 font-bold border border-black w-[100px]"
        placeholder="#"
      />
      <span class="text-primary font-bold">$0.00 x Persona</span>
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
