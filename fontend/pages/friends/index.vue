<template>
  <div>
     <!-- friends request -->
    <div>
      <div class="mx-auto w-full xl:w-9/12 mb-5">
        <div class="bg-white rounded-md p-3 shadow-sm">
          <div class="font-semibold text-lg">Lời mời Kết bạn</div>
        </div>
      </div>
      <div class="mx-auto w-full xl:w-9/12">
        <div class="bg-white rounded-md shadow-sm p-5">
          <div class="grid grid-cols-12 gap-5">
            <div class="col-span-6 md:col-span-3 sm:col-span-4 border rounded-lg overflow-hidden shadow-sm " v-for="i in 10">
              <img src="https://avatars.githubusercontent.com/u/45328646" alt="">
              <div class="p-2 mb-2">
                <NuxtLink href="/Nguyễn văn Sơn"
                  class="font-medium overflow-hidden truncate whitespace-nowrap hover:underline">Nguyễn văn Sơn
                </NuxtLink>
              </div>
              <div class="flex flex-col gap-2 p-2">

                <Button label="Xác nhận" severity="info" raised></Button>
                <Button label="Từ chối" severity="secondary" raised></Button>
              </div>
            </div>
          </div>
          <NuxtLink to="/friends/requests" class="my-3 flex items-center justify-end hover:cursor-pointer hover:underline">
            <p class="text-lg">Xem tất cả</p>
            <div>
              <svg class="w-6 h-6 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z" />
              </svg>

            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <!-- friends suggestions -->
    <div>
      <div class="mx-auto w-full xl:w-9/12 my-5">
        <div class="bg-white rounded-md p-3 shadow-sm">
          <div class="font-semibold text-lg">Bạn bè đề xuất</div>
        </div>
      </div>
      <div class="mx-auto w-full xl:w-9/12">
        <div class="bg-white rounded-md shadow-sm p-5">
          <div class="grid grid-cols-12 gap-5">
            <div class="col-span-6 md:col-span-3 sm:col-span-4 border rounded-lg overflow-hidden shadow-sm " v-for="i in 10">
              <img src="https://avatars.githubusercontent.com/u/45328646" alt="">
              <div class="p-2 mb-2">
                <NuxtLink href="/Nguyễn văn Sơn"
                  class="font-medium overflow-hidden truncate whitespace-nowrap hover:underline">Nguyễn văn Sơn
                </NuxtLink>
              </div>
              <div class="flex flex-col gap-2 p-2">

                <Button label="Thêm bạn bè" severity="info" raised></Button>
              </div>
            </div>
          </div>
          <NuxtLink to="/friends/suggestions" class="my-3 flex items-center justify-end hover:cursor-pointer hover:underline">
            <p class="text-lg">Xem tất cả</p>
            <div>
              <svg class="w-6 h-6 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z" />
              </svg>

            </div>
          </NuxtLink>
        </div>

      </div>
    </div>
    <!-- friends all -->
    <div>
      <div class="mx-auto w-full xl:w-9/12 my-5">
        <div class="bg-white rounded-md p-3 shadow-sm">
          <div class="font-semibold text-lg">Tất cả bạn bè</div>
        </div>
      </div>
      <div class="mx-auto w-full xl:w-9/12">
        <div class="bg-white rounded-md shadow-sm p-5">
          <div class="grid grid-cols-12 gap-5 mt-5">
            <div class="col-span-6 md:col-span-4 p-3 border rounded-md flex justify-between" v-for="i in 9">
              <div class="flex gap-4">
                <div class="h-[75px] w-[75px] bg-gray-700 rounded-md"></div>
                <div class="text-lg">Họ và tên</div>
              </div>
              <div class="hover:bg-gray-100 h-fit my-auto rounded-full transition duration-150 ease-in-out">
                <svg class="w-9 h-9 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                    d="M6 12h.01m6 0h.01m5.99 0h.01" />
                </svg>
              </div>
            </div>
          </div>
          <NuxtLink to="friends/list" class="my-3 flex items-center justify-end hover:cursor-pointer hover:underline">
            <p class="text-lg">Xem tất cả</p>
            <div>
              <svg class="w-6 h-6 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z" />
              </svg>

            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
