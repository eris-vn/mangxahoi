<template>
  <div>
    <header class="bg-white fixed border-b border-gray-300 w-full top-0 z-50">
      <div class="flex justify-between items-center p-4 px-10 gap-3">
        <!-- Logo or Brand Name -->
        <NuxtLink to="/" class="text-xl font-bold text-gray-700">Logo</NuxtLink>

        <InputText
          id="username"
          aria-describedby="username-help"
          placeholder="Tìm kiếm"
          class="w-full max-w-[480px]"
          v-model="search"
          @keyup.enter="onSearch()"
        />

        <!-- Nav Links (hidden on mobile, visible on desktop) -->
        <nav class="hidden md:flex items-center space-x-4" v-if="isLogged">
          <NuxtLink
            to="/submit"
            class="flex gap-3 items-center hover:bg-slate-200 p-2 px-3 rounded-lg cursor-pointer"
          >
            <img
              src="https://s3.cloudfly.vn/shoperis/2024/09/f13f5452fe57018810c3c22000ce08d5.avif"
              alt=""
              srcset=""
              class="h-5 w-5"
            />
            Đăng bài
          </NuxtLink>
          <div>
            <div class="cursor-pointer" @click="showNotification">
              <img
                src="https://s3.cloudfly.vn/shoperis/2024/09/3f1aceacda082b9392ff8a114ef143e3.avif"
                alt=""
                class="h-5 w-5 block"
              />
            </div>
            <Popover ref="notification">
              <div class="flex flex-col w-[18rem]">
                <div class="font-semibold">Thông báo</div>
                <div class="flex flex-col mt-2">
                  <div class="flex">
                    <div class="w-20">
                      <Avatar
                        label="S"
                        class="cursor-pointer w-full"
                        size="large"
                      />
                    </div>
                    <div>
                      <span class="font-semibold">Nguyễn Văn A</span> đã thích
                      bài viết của bạn
                    </div>
                  </div>
                </div>
              </div>
            </Popover>
          </div>
          <Avatar label="S" class="mr-2 cursor-pointer" @click="toggle" />
          <Popover ref="profile">
            <div class="flex flex-col w-[15rem]">
              <NuxtLink
                to="/sonnv"
                class="flex gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
              >
                <Avatar label="S" class="cursor-pointer w-full" size="large" />
                <div>
                  <div class="text-gray-800">Nguyễn Văn Sơn</div>
                  <div class="text-sm">@sonnv</div>
                </div>
              </NuxtLink>

              <div class="h-[1px] bg-gray-200 my-2"></div>

              <NuxtLink to="/settings"
                class="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#545454"
                    d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
                  />
                </svg>
                Cài đặt
              </NuxtLink>

              <div
                class="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                @click="isLogged = false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#545454"
                    d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
                  />
                </svg>
                Đăng xuất
              </div>
            </div>
          </Popover>
        </nav>
        <nav class="hidden md:flex items-center space-x-4" v-else>
          <Button label="Đăng nhâp" @click="isVisibleLogin = true"></Button>
        </nav>

        <!-- Toggle Sidebar Button for Mobile -->
        <button
          id="toggle-sidebar"
          class="bg-blue-600 text-white p-2 rounded-full md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <!-- Modal -->
      <Login
        v-model="isVisibleLogin"
        @show-register="isVisibleRegister = true"
      ></Login>
      <Register v-model="isVisibleRegister"></Register>
    </header>
  </div>
</template>

<script setup lang="ts">
import Login from "./modal/login.vue";
import Register from "./modal/register.vue";
const router = useRouter();

const isLogged = ref(true);

const profile = ref();
const toggle = (event: any) => {
  profile.value.toggle(event);
};

const notification = ref();
const showNotification = (event: any) => {
  notification.value.toggle(event);
};

const isVisibleLogin = ref(false);
const isVisibleRegister = ref(false);

const search = ref();
const onSearch = () => {
  router.push({
    path: `/search/posts`,
    query: {
      q: search.value,
    },
  });
};
</script>

<style scoped></style>
