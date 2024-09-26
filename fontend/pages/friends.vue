<template>
  <div class="mx-auto w-full xl:w-9/12">
    <div class="bg-white rounded-md p-6 shadow-sm">
      <div class="font-semibold text-xl">Bạn bè</div>
      <div class="grid grid-cols-12 gap-5 mt-5">
        <div
          class="col-span-4 p-3 border rounded-md flex justify-between"
          v-for="i in 9"
        >
          <div class="flex gap-4">
            <div class="h-[75px] w-[75px] bg-gray-700 rounded-md"></div>
            <div class="text-lg">Họ và tên</div>
          </div>
          <div
            class="hover:bg-gray-100 h-fit my-auto rounded-full transition duration-150 ease-in-out"
          >
            <svg
              class="w-9 h-9 text-gray-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M6 12h.01m6 0h.01m5.99 0h.01"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
