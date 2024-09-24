<template>
  <div>
    <div class="mx-auto w-full xl:w-9/12">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 lg:col-span-8">
          <Tabs value="0" class="mb-4 rounded-md overflow-hidden">
            <TabList>
              <Tab value="0">Dành cho bạn</Tab>
              <Tab value="1">Đang theo dõi</Tab>
            </TabList>
          </Tabs>

          <!-- Posts -->
          <Posts v-for="i in 10"></Posts>
        </div>
        <div class="col-span-12 lg:col-span-4">
          <div class="sticky top-0">
            <!-- Hot Trend -->
            <div class="bg-white rounded-md p-4 pt-3 shadow-sm">
              <div class="text-lg font-bold text-gray-700">Chủ đề hot</div>
              <div class="grid gap-2 mt-2">
                <div
                  class="bg-gray-100 p-2 rounded-sm px-3 hover:bg-gray-200 flex justify-between items-center transition duration-150 ease-in-out"
                >
                  <div>
                    <div class="font-bold text-gray-700">#VueJS</div>
                    <div>539 bài viết</div>
                  </div>
                  <div
                    class="hover:bg-gray-100 rounded-full transition duration-150 ease-in-out"
                  >
                    <svg
                      class="w-6 h-6 text-gray-700"
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
                <div
                  class="bg-gray-100 p-2 rounded-sm px-3 hover:bg-gray-200 flex justify-between items-center transition duration-150 ease-in-out"
                >
                  <div>
                    <div class="font-bold text-gray-700">#NextJS</div>
                    <div>100 bài viết</div>
                  </div>
                  <div
                    class="hover:bg-gray-100 rounded-full transition duration-150 ease-in-out"
                  >
                    <svg
                      class="w-6 h-6 text-gray-700"
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
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
