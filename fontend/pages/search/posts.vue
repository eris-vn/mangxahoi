<template>
  <div class="mx-auto w-full xl:w-9/12">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-12">
        <Tabs value="0" class="rounded-md overflow-hidden">
          <TabList>
            <Tab value="0">Bài viết</Tab>
            <Tab value="1">Hội nhóm</Tab>
            <Tab value="2">Mọi người</Tab>
          </TabList>
        </Tabs>
      </div>
      <div class="col-span-12 lg:col-span-8">
        <!-- Posts -->
        <Posts v-for="i in 10"></Posts>
      </div>
      <div class="col-span-12 lg:col-span-4">
        <div class="sticky top-0">
          <!-- Hot Trend -->
          <div class="bg-white rounded-md p-4 pt-3 shadow-sm">
            <div class="text-lg font-bold text-gray-700">Hội nhóm</div>
            <div class="grid gap-2 mt-2">
              <div
                class="bg-gray-100 p-2 rounded-md px-3 hover:bg-gray-200 flex gap-3 items-center transition duration-150 ease-in-out cursor-pointer"
              >
                <img
                  src="https://s3.cloudfly.vn/shoperis/2024/10/78df496f2a9e296a970290ae5d702336.avif"
                  alt=""
                  srcset=""
                  class="aspect-square w-11 border rounded-full"
                  data-v-inspector="pages/groups/discover.vue:20:15"
                />
                <div>
                  <div class="font-bold text-gray-700">Nuxt</div>
                  <div>93k thành viên</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Infomation -->
          <div class="mt-4 text-sm">
            <a href="#">Điều khoản sử dụng</a> .
            <a href="#">Quyền riêng tư</a> .
            <a href="#">Giới thiệu</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
