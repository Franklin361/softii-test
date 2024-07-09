<script setup lang="ts"></script>

<template>
  <section>
    <div
      class="bg-gray-200 rounded-2xl border-2 border-transparent group has-[:focus]:border-primary has-[:focus]:bg-primary/5 pb-5"
    >
      <div class="px-12 pt-5">
        <header class="relative text-2xl  ">
          <span
            class="font-semibold absolute left-0 top-1/2 -translate-y-1/2 block"
            >$</span
          >
          <div
            type="text"
            class="w-full border-b border-black p-3 pr-12 pl-7 font-bold text-end truncate"
          >
            123
          </div>
          <button
            class="absolute top-1/2 -translate-y-1/2 right-0 rounded-full hover:bg-primary p-2 hover:text-white duration-200 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-5"
            >
              <path
                d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"
              />
              <path d="m12 9 6 6" />
              <path d="m18 9-6 6" />
            </svg>
          </button>
        </header>
        <div class="grid grid-cols-3 gap-5 my-5">
          <button
            class="bg-white grid place-items-center rounded-xl text-3xl p-3 aspect-square border-2 border-gray-300 hover:bg-primary/80 hover:text-white active:bg-primary transition-all duration-200 hover:border-primary"
            v-for="(_, index) in 9"
            :key="index"
          >
            {{ index+1 }}
          </button>
          <button
            class="bg-white grid place-items-center rounded-xl text-3xl p-3 aspect-square border-2 border-gray-300 hover:bg-primary/80 hover:text-white active:bg-primary transition-all duration-200 hover:border-primary"
          >
            00
          </button>
          <button
            class="bg-white grid place-items-center rounded-xl text-3xl p-3 aspect-square border-2 border-gray-300 hover:bg-primary/80 hover:text-white active:bg-primary transition-all duration-200 hover:border-primary"
          >
            0
          </button>
          <div class="grid place-items-center">
            <button
              class="bg-primary rounded-xl text-3xl p-3 aspect-square border-2 hover:bg-primary/80 text-white active:bg-primary transition-all duration-200 border-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                stroke-width="2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-7"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class=" flex justify-center px-4">
        <span
          class="text-primary font-bold text-center border-2 border-primary bg-primary/10 w-full p-2 rounded-3xl"
          >Cantidad restante $1,200.00</span
        >
      </div>
    </div>
  </section>
</template>
