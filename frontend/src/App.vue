<script setup lang="ts"></script>

<template>
  <div class="">
    <nav
      class="border-b border-black flex justify-between px-5 py-4 items-center"
    >
      <div class="flex gap-5 items-center">
        <a
          href="#"
          class="flex gap-1 items-center"
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
            <path d="m15 18-6-6 6-6" />
          </svg>
          Atrás</a
        >
        <h1 class="text-2xl font-bold">Pago de Propinas</h1>
      </div>

      <div class="flex flex-col gap-1 items-end">
        <span class="text-sm leading-none">Efectivo en caja</span>
        <span class="p-2 text-3xl font-semibold bg-black/10 rounded-md"
          >$5,500.00</span
        >
      </div>
    </nav>

    <main class="min-h-screen p-5">
      <div class="grid grid-cols-3 gap-5">
        <!--  -->
        <section class="space-y-6">
          <!--  -->
          <div class="flex gap-3 items-center">
            <div class="flex flex-col gap-1 items-start">
              <span class="text-sm leading-none">Total de propinas</span>
              <span class="p-2 text-3xl font-semibold bg-black/10 rounded-md"
                >$1,828.00</span
              >
            </div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
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
          <!--  -->
          <div>
            <span>¿Entre cuántos quieres dividir las propinas?</span>
            <div>
              <input type="number" />
              <span>$0.00 x Persona</span>
            </div>
          </div>
          <!--  -->
          <div>
            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-5"
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
              <span>Elige el método de pago </span>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div>
                <span>
                  <svg
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
                <span>efectivo</span>
              </div>
              <div
                v-for="( index) in 2"
                :key="index"
              >
                <span>
                  <svg
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
                </span>
                <span>card</span>
              </div>
            </div>
          </div>
          <!--  -->
        </section>
        <!--  -->
        <section>
          <div>
            <header>
              <input type="text" />
              <button>
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
            <div class="grid grid-cols-3 gap-5">
              <button
                v-for="(_, index) in 9"
                :key="index"
              >
                {{ index+1 }}
              </button>
              <button>00</button>
              <button>0</button>
              <button>
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
        </section>
        <!--  -->
        <section>
          <div>
            <span class>Pagos</span>
            <ul class="my-5">
              <li>Sin pagos</li>
            </ul>
          </div>
        </section>
      </div>
    </main>

    <footer class="flex justify-between items-center gap-20 p-5 text-2xl">
      <div class="flex-1 space-y-2">
        <div class="flex justify-between items-center gap-5 font-bold">
          <span>Total pagado</span>
          <span>$0.00</span>
        </div>
        <div class="flex justify-between items-center gap-5 font-bold">
          <span>Restante por pagar</span>
          <span>$1,828.00</span>
        </div>
      </div>
      <button
        class="flex-1 rounded-full border border-black opacity-50 pointer-events-none p-4"
      >
        Pagar propinas
      </button>
    </footer>
  </div>
</template>
