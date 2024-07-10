<script setup lang="ts"></script>

<template>
  <nav class="border-b border-black ">
    <div
      class="max-w-6xl mx-auto flex lg:justify-between justify-center px-5 py-4 items-center flex-wrap lg:gap-0 gap-2"
    >
      <div class="flex lg:gap-5 gap-2 items-center lg:flex-row flex-col">
        <a
          href="#"
          class="flex gap-1 items-center text-primary hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-7"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Atrás</a
        >
        <h1 class="lg:text-2xl md:text-xl text-lg font-bold">
          Pago de Propinas
        </h1>
      </div>
      <div class="flex flex-col gap-1 lg:items-end items-center text-primary">
        <span class="text-sm leading-none">Efectivo en caja</span>
        <span
          class="p-2 lg:text-3xl text-2xl font-semibold  rounded-md bg-primary/20 "
          >$5,500.00</span
        >
      </div>
    </div>
  </nav>
</template>
