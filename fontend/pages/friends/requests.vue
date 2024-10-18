<template>
  <div>
     <!-- friends request -->
     <div>
      <div class="mx-auto w-full xl:w-9/12">
        <div class="bg-white rounded-md shadow-sm p-5">
          <div class="flex justify-between items-center mb-4">
            <div class="font-semibold text-lg">Lời mời kết bạn</div>
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
                    Xác nhận
                  </button>
                  <button
                    class="bg-gray-200 text-gray-700 px-4 py-2 rounded-sm hover:bg-gray-300 shadow-sm transition duration-150 ease-in-out"
                  >
                    Xoá
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
