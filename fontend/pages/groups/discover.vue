<template>
  <div class="mx-auto w-full xl:w-9/12">
    <div class="font-semibold text-xl mt-1">Đề xuất cho bạn</div>

    <div class="mt-4 grid grid-cols-12 gap-4">
      <div class="col-span-4" v-for="i in 9">
        <div class="bg-white rounded-md overflow-hidden shadow-sm relative">
          <div
            class="w-8 h-8 absolute top-3 right-3 bg-transparent/30 hover:bg-transparent/90 text-white flex justify-center items-center rounded-full"
          >
            <Icon name="fa6-solid:xmark" class="text-white"></Icon>
          </div>
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
            <button
              class="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 shadow-md w-full transition duration-150 ease-in-out mt-3"
            >
              Tham gia nhóm
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-4 gap-1 cursor-pointer">
      <div class="bg-blue-500 p-2 px-3 flex items-center text-white rounded-md">
        <span>Xem thêm</span>
        <Icon name="icon-park-solid:down-one" class="text-xl"></Icon>
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
