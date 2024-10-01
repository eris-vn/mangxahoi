<template>
  <div>
    <!-- friends request -->
    <div>
      <div class="mx-auto w-full xl:w-9/12">
        <div class="bg-white rounded-md shadow-sm p-5">
          <div class="flex justify-between items-center mb-4">
            <div class="font-semibold text-lg">Lời mời kết bạn</div>
            <div class="text-blue-600 flex items-center">
              XEM TẤT CẢ <Icon name="mingcute:right-line"></Icon>
            </div>
          </div>

          <div class="grid grid-cols-15 gap-5">
            <div
              class="col-span-6 md:col-span-3 sm:col-span-4 border rounded-lg overflow-hidden shadow-sm"
              v-for="i in 10"
            >
              <img
                src="https://avatars.githubusercontent.com/u/45328646"
                alt=""
              />
              <div class="p-3">
                <NuxtLink
                  href="/Nguyễn văn Sơn"
                  class="overflow-hidden truncate whitespace-nowrap hover:underline"
                  >Nguyễn Văn Sơn
                </NuxtLink>
                <div class="flex flex-col gap-2 mt-2">
                  <button
                    class="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 shadow-sm transition duration-150 ease-in-out"
                  >
                    XÁC NHẬN
                  </button>
                  <button
                    class="bg-gray-200 text-gray-700 px-4 py-2 rounded-sm hover:bg-gray-300 shadow-sm transition duration-150 ease-in-out"
                  >
                    XOÁ
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex justify-center mt-4 items-center gap-1 cursor-pointer"
          >
            <span>Xem thêm</span>
            <Icon name="icon-park-solid:down-one" class="text-xl"></Icon>
          </div>
        </div>
      </div>
    </div>
    <!-- friends all -->
    <div class="mt-5">
      <div class="mx-auto w-full xl:w-9/12">
        <div class="bg-white rounded-md shadow-sm p-5">
          <div class="flex justify-between items-center mb-4">
            <div class="font-semibold text-lg">Danh sách bạn bè</div>
            <div class="text-blue-600 flex items-center">
              XEM TẤT CẢ <Icon name="mingcute:right-line"></Icon>
            </div>
          </div>

          <div class="grid grid-cols-12 gap-5">
            <div
              class="col-span-6 md:col-span-4 p-3 border rounded-md flex justify-between"
              v-for="i in 15"
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

          <div
            class="flex justify-center mt-4 items-center gap-1 cursor-pointer"
          >
            <span>Xem thêm</span>
            <Icon name="icon-park-solid:down-one" class="text-xl"></Icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
