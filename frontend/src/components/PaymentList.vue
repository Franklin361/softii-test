<script setup lang="ts">

const options: { label: string, typeIcon: 'cash' | 'card', value: number }[] = [
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
  {
    label: 'Efectivo',
    typeIcon: 'cash',
    value: 100
  },
]
</script>

<template>
  <section>
    <div class="overflow-y-auto h-[450px] scroll-custom pb-5">
      <span class="sticky pb-5 pt-0 top-0 bg-background block w-full"
        >Pagos</span
      >
      <div class="px-2">
        <div
          v-if="options.length <=0"
          class="border border-black/30 rounded-2xl shadow-lg shadow-black/20  px-5 py-4 hover:bg-primary/90 hover:text-white cursor-pointer active:bg-primary transition-all duration-200 bg-white text-sm font-semibold "
        >
          Sin pagos
        </div>

        <ul
          class=" space-y-4"
          v-else
        >
          <li
            v-for="({ label, typeIcon, value }, index) in  options"
            :key="index"
            class="border border-black/30 rounded-2xl shadow-lg shadow-black/20 px-5 py-3 bg-white text-sm font-semibold flex items-center gap-2 justify-between"
          >
            <div class="flex items-center gap-3">
              <span>
                <svg
                  v-if="typeIcon === 'card'"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  class="size-5"
                >
                  stroke-linejoin="round"
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
                  class="size-5"
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
              <span class="font-semibold">{{ label }}</span>
            </div>
            <div class="flex items-center gap-5">
              <span class="font-bold text-lg">${{ value }}</span>
              <button
                class=" hover:text-white transition-all hover:bg-rose-500 p-1 rounded-full duration-200 active:bg-rose-600"
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style>

.scroll-custom::-webkit-scrollbar,
.custom-scroll::-webkit-scrollbar {
  @apply bg-transparent w-[10px];
}

.scroll-custom::-webkit-scrollbar-track,
.custom-scroll::-webkit-scrollbar-track {
  @apply bg-transparent;
}

.scroll-custom::-webkit-scrollbar-thumb,
.custom-scroll::-webkit-scrollbar-thumb {
  @apply bg-primary rounded-2xl;
}
</style>
