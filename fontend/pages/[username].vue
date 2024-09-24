<template>
  <div>
    <div class="mx-auto w-full xl:w-9/12">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 lg:col-span-8">
          <div
            class="bg-white rounded-md shadow-sm overflow-hidden mb-4 last:mb-0"
          >
            <img
              src="https://cdn1.epicgames.com/ue/product/Screenshot/Screenshot23-1920x1080-a2f8a3c1f88f3b5716bdd8c9a2ea0c28.jpg?resize=1&w=1920"
              alt=""
              srcset=""
              class="w-full max-h-[220px] object-cover"
            />
            <div class="flex gap-3 p-2 px-3">
              <div class="h-[60px] w-32 relative">
                <img
                  src="https://avatars.githubusercontent.com/u/45328646"
                  alt=""
                  srcset=""
                  class="top-[-80px] aspect-square rounded-full border-2 border-gray-600 absolute"
                />
              </div>
              <div>
                <div class="text-lg font-semibold">Nguyễn Văn Sơn</div>
                <div>1,1K người theo dõi • 223 đang theo dõi</div>
              </div>
            </div>

            <div class="h-[1px] bg-gray-200"></div>

            <Tabs value="0" class="rounded-md overflow-hidden">
              <TabList>
                <Tab value="0">Bài viết</Tab>
                <Tab value="1">Ảnh</Tab>
                <Tab value="2">Video</Tab>
              </TabList>
            </Tabs>
          </div>

          <!-- Mobile Infomation -->

          <div class="block lg:hidden">
            <!-- + Introduction -->
            <div class="bg-white rounded-md p-4 pt-3 shadow-sm mb-4 last:mb-0">
              <div class="text-lg font-bold text-gray-700">Giới thiệu</div>
              <div class="mt-2">
                Skills: Laravel, Nuxt, Vue, Astro, Python <br />
                Interests: NextJS
              </div>
            </div>

            <!-- + Friends -->
            <div class="bg-white rounded-md p-4 pt-3 shadow-sm mb-4 last:mb-0">
              <div class="text-lg font-bold text-gray-700">Bạn bè</div>
              <div class="grid grid-cols-12 gap-3">
                <div class="col-span-4 mt-2" v-for="i in 9">
                  <div
                    class="w-full aspect-square bg-slate-500 rounded-md"
                  ></div>
                  <div class="truncate">Nguyễn Văn A</div>
                </div>
              </div>
            </div>
          </div>

          <!-- End Mobile Infomation -->

          <Posts v-for="i in 10"></Posts>
        </div>
        <div class="col-span-12 lg:col-span-4 hidden lg:block">
          <div class="sticky top-0">
            <!-- Introduction -->
            <div class="bg-white rounded-md p-4 pt-3 shadow-sm mb-4 last:mb-0">
              <div class="text-lg font-bold text-gray-700">Giới thiệu</div>
              <div class="mt-2">
                ERIS_VN <br />
                Skills: Laravel, Nuxt, Vue, Astro, Python <br />
                Interests: NextJS
              </div>
            </div>

            <!-- Friends -->
            <div class="bg-white rounded-md p-4 pt-3 shadow-sm mb-4 last:mb-0">
              <div class="text-lg font-bold text-gray-700">Bạn bè</div>
              <div class="grid grid-cols-12 gap-3">
                <div class="col-span-4 mt-2" v-for="i in 9">
                  <div
                    class="w-full aspect-square bg-slate-500 rounded-md"
                  ></div>
                  <div class="truncate">Nguyễn Văn A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
