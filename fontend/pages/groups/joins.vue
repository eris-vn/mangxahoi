<template>
  <div class="mx-auto w-full xl:w-9/12">
    <div class="font-semibold text-xl mt-1">Nhóm bạn đã tham gia</div>

    <div class="mt-4 grid grid-cols-12 gap-4">
      <div class="col-span-4" v-for="i in 9">
        <div class="bg-white rounded-md overflow-hidden shadow-sm relative">
          <img
            src="https://s3.cloudfly.vn/shoperis/2024/10/7a63e0b539f2f2c7665730750b8a83ab.avif"
            alt=""
            class="w-full aspect-video"
          />
          <div class="p-3">
            <div class="flex gap-2">
              <img
                src="https://s3.cloudfly.vn/shoperis/2024/10/78df496f2a9e296a970290ae5d702336.avif"
                alt=""
                srcset=""
                class="aspect-square w-11 border rounded-full"
              />
              <div>
                <div class="font-semibold text-gray-700">Nuxt 3</div>
                <div class="text-sm text-gray-500">98K thành viên</div>
              </div>
            </div>
            <div class="flex items-center gap-3 mt-3">
              <button
                class="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 shadow-md w-full transition duration-150 ease-in-out"
              >
                Xem nhóm
              </button>
              <button
                class="bg-gray-200 h-[40px] text-gray-700 px-4 py-2 rounded-sm hover:bg-gray-300 shadow-sm transition duration-150 ease-in-out flex items-center"
              >
                <Icon name="ph:dots-three-bold" class="text-xl"></Icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "groups",
});
</script>

<style scoped></style>
