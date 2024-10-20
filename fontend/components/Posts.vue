<template>
  <div class="bg-white rounded-md p-4 shadow-sm mb-4 last:mb-0 relative">
    <!-- Posts Header -->
    <div class="flex justify-between items-center">
      <div class="flex gap-3">
        <img
          class="h-11 w-11 object-cover rounded-full border"
          src="https://www.inkoop.io/static/3fd155c993893819981d0b9fa56b5057/b7804/logo.png"
          alt=""
        />
        <div>
          <div class="font-bold">NuxtJS</div>
          <div class="text-sm">15 phút trước</div>
        </div>
      </div>
      <div
        class="hover:bg-gray-100 rounded-full transition duration-150 ease-in-out cursor-pointer"
        @click="toggleAction"
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
      <div
        v-if="actionVisible"
        class="absolute right-4 top-14 mt-2 w-[15rem] bg-white border border-gray-200 rounded-lg shadow-md p-2 z-10"
      >
        <div class="flex flex-col gap-1">
          <div
            class="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#545454"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-5.918-3.805a2 2 0 0 0-2.164 0z"
              />
            </svg>
            Lưu bài viết
          </div>

          <div
            class="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              viewBox="0 0 24 24"
            >
              <path
                fill="#545454"
                d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"
              />
            </svg>
            Ẩn bài viết
          </div>

          <div
            class="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              viewBox="0 0 24 24"
            >
              <path
                fill="#545454"
                d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm-2.75 8L3 15.75v-7.5L8.25 3h7.5L21 8.25v7.5L15.75 21zm.85-2h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8zm2.9-7"
              />
            </svg>
            Tố cáo
          </div>

          <hr />

          <div
            class="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
          >
            <Icon
              name="gg:remove"
              class="text-2xl ms-[2px] text-gray-600"
            ></Icon>
            Gỡ bài viết
          </div>
        </div>
      </div>
    </div>
    <!-- Posts Title -->
    <h3 class="mt-3">New Update!</h3>
    <!-- Posts Image -->
    <div class="mt-3">
      <Image
        src="https://nuxt.com/__og-image__/static/docs/getting-started/upgrade/og.png"
        alt=""
        class="rounded-md w-full max-h-[400px] object-cover"
        preview
      >
        <template #image>
          <img
            src="https://nuxt.com/__og-image__/static/docs/getting-started/upgrade/og.png"
            alt="image"
          />
        </template>
        <template #preview="slotProps">
          <div class="container mx-auto">
            <img
              src="https://nuxt.com/__og-image__/static/docs/getting-started/upgrade/og.png"
              alt="preview"
              :style="slotProps.style"
            />
          </div>
        </template>
      </Image>
    </div>
    <!-- Posts Interact Count -->
    <div class="flex justify-between mt-3">
      <div>150 lượt tương tác</div>
      <div class="flex gap-3">
        <div>0 bình luận</div>
        <div>1 chia sẽ</div>
      </div>
    </div>
    <!-- Posts Action -->
    <div class="mt-3 grid grid-cols-3 gap-3">
      <!-- Like -->
      <div
        class="bg-gray-100 hover:bg-gray-200 transition duration-150 ease-in-out rounded-sm p-1 px-2 flex gap-1 border border-gray-200 hover:border-gray-300 cursor-pointer text-base items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 20 20"
          class="h-6 w-6"
        >
          <path
            fill="#545454"
            d="M1.36 9.495v7.157h3.03l.153.018c2.813.656 4.677 1.129 5.606 1.422c1.234.389 1.694.484 2.531.54c.626.043 1.337-.198 1.661-.528c.179-.182.313-.556.366-1.136a.68.68 0 0 1 .406-.563c.249-.108.456-.284.629-.54c.16-.234.264-.67.283-1.301a.68.68 0 0 1 .339-.57c.582-.337.87-.717.93-1.163c.066-.493-.094-1.048-.513-1.68a.683.683 0 0 1 .176-.936c.401-.282.621-.674.676-1.23c.088-.886-.477-1.541-1.756-1.672a9.4 9.4 0 0 0-3.394.283a.68.68 0 0 1-.786-.95c.5-1.058.778-1.931.843-2.607c.085-.897-.122-1.547-.606-2.083c-.367-.406-.954-.638-1.174-.59c-.29.062-.479.23-.725.818c-.145.348-.215.644-.335 1.335c-.115.656-.178.952-.309 1.34c-.395 1.176-1.364 2.395-2.665 3.236a12 12 0 0 1-2.937 1.37a.7.7 0 0 1-.2.03zm-.042 8.52c-.323.009-.613-.063-.856-.233c-.31-.217-.456-.559-.459-.953l.003-7.323c-.034-.39.081-.748.353-1.014c.255-.25.588-.368.94-.36h2.185A10.5 10.5 0 0 0 5.99 6.95c1.048-.678 1.82-1.65 2.115-2.526c.101-.302.155-.552.257-1.14c.138-.789.224-1.156.422-1.628c.41-.982.948-1.462 1.69-1.623c.73-.158 1.793.263 2.465 1.007c.745.824 1.074 1.855.952 3.129q-.079.82-.454 1.844a10.5 10.5 0 0 1 2.578-.056c2.007.205 3.134 1.512 2.97 3.164c-.072.712-.33 1.317-.769 1.792c.369.711.516 1.414.424 2.1c-.106.79-.546 1.448-1.278 1.959c-.057.693-.216 1.246-.498 1.66a2.9 2.9 0 0 1-.851.834c-.108.684-.335 1.219-.706 1.595c-.615.626-1.714.999-2.718.931c-.953-.064-1.517-.18-2.847-.6c-.877-.277-2.693-.737-5.43-1.377zm1.701-8.831a.68.68 0 0 1 .68-.682a.68.68 0 0 1 .678.682v7.678a.68.68 0 0 1-.679.681a.68.68 0 0 1-.679-.681z"
          />
        </svg>
        Thích
      </div>

      <!-- Comment -->
      <div
        class="bg-gray-100 hover:bg-gray-200 transition duration-150 ease-in-out rounded-sm p-1 px-2 flex gap-1 border border-gray-200 hover:border-gray-300 cursor-pointer text-base items-center justify-center"
        @click="visibleDialog = true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 24 24"
        >
          <path
            fill="#545454"
            d="M12 2A10 10 0 0 0 2 12a9.9 9.9 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20m0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20"
          />
        </svg>
        Bình luận
      </div>

      <!-- Share -->
      <div
        class="bg-gray-100 hover:bg-gray-200 transition duration-150 ease-in-out rounded-sm p-1 px-2 flex gap-1 border border-gray-200 hover:border-gray-300 cursor-pointer text-base items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="#545454"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            color="#545454"
          >
            <path
              d="m20.393 8.032l-1.747-1.517c-1.259-1.093-1.752-1.681-2.434-1.474c-.85.26-.57 1.895-.57 2.447c-1.321 0-2.695-.101-3.998.11c-4.3.7-5.644 3.759-5.644 7.055c1.217-.747 2.433-1.578 3.895-1.924c1.826-.432 3.865-.226 5.747-.226c0 .552-.28 2.188.57 2.447c.772.236 1.175-.38 2.434-1.473l1.747-1.517C21.464 11.03 22 10.564 22 9.996s-.536-1.034-1.607-1.964"
            />
            <path
              d="M10.568 3c-3.86.007-5.882.102-7.174 1.39C2 5.783 2 8.022 2 12.5s0 6.717 1.394 8.109C4.788 22 7.032 22 11.52 22s6.73 0 8.125-1.391C20.615 19.64 20.91 18.26 21 16"
            />
          </g>
        </svg>
        Chia sẽ
      </div>
    </div>

    <Dialog
      v-model:visible="visibleDialog"
      modal
      :show-header="false"
      :pt="{
        root: 'pt-4',
        content: 'pb-0',
      }"
      :style="{ width: '46rem' }"
    >
      <!-- Posts Header -->
      <div class="flex justify-between items-center sticky top-0 bg-white pb-3">
        <div class="flex gap-3">
          <Image
            class="h-11 w-11 object-cover rounded-full border"
            src="https://www.inkoop.io/static/3fd155c993893819981d0b9fa56b5057/b7804/logo.png"
            alt=""
            preview
          />
          <div>
            <div class="font-bold">NuxtJS</div>
            <div class="text-sm">15 phút trước</div>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <div
            class="hover:bg-gray-100 rounded-full transition duration-150 ease-in-out cursor-pointer"
            @click="toggleAction"
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
          <div
            class="hover:bg-gray-100 rounded-full transition duration-150 ease-in-out cursor-pointer"
            @click="visibleDialog = false"
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
                fill="#545454"
                d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
              />
            </svg>
          </div>
        </div>

        <div
          v-if="actionVisible"
          class="absolute right-12 top-10 mt-2 w-[15rem] bg-white border border-gray-200 rounded-lg shadow-md p-2"
        >
          <div class="flex flex-col gap-1">
            <div
              class="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#545454"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-5.918-3.805a2 2 0 0 0-2.164 0z"
                />
              </svg>
              Lưu bài viết
            </div>

            <div
              class="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#545454"
                  d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"
                />
              </svg>
              Ẩn bài viết
            </div>

            <div
              class="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#545454"
                  d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm-2.75 8L3 15.75v-7.5L8.25 3h7.5L21 8.25v7.5L15.75 21zm.85-2h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8zm2.9-7"
                />
              </svg>
              Tố cáo
            </div>
          </div>
        </div>
      </div>
      <!-- Posts Title -->
      <h3>New Update!</h3>
      <!-- Posts Image -->
      <div class="mt-3">
        <img
          src="https://nuxt.com/__og-image__/static/docs/getting-started/upgrade/og.png"
          alt=""
          class="rounded-md w-full max-h-[400px] object-cover"
        />
      </div>
      <!-- Posts Interact Count -->
      <div class="flex justify-between mt-3">
        <div>150 lượt tương tác</div>
        <div class="flex gap-3">
          <div>0 bình luận</div>
          <div>1 chia sẽ</div>
        </div>
      </div>
      <!-- Posts Action -->
      <div class="mt-3 grid grid-cols-3 gap-3">
        <!-- Like -->
        <div
          class="bg-gray-100 hover:bg-gray-200 transition duration-150 ease-in-out rounded-sm p-1 px-2 flex gap-1 border border-gray-200 hover:border-gray-300 cursor-pointer text-base items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
            class="h-6 w-6"
          >
            <path
              fill="#545454"
              d="M1.36 9.495v7.157h3.03l.153.018c2.813.656 4.677 1.129 5.606 1.422c1.234.389 1.694.484 2.531.54c.626.043 1.337-.198 1.661-.528c.179-.182.313-.556.366-1.136a.68.68 0 0 1 .406-.563c.249-.108.456-.284.629-.54c.16-.234.264-.67.283-1.301a.68.68 0 0 1 .339-.57c.582-.337.87-.717.93-1.163c.066-.493-.094-1.048-.513-1.68a.683.683 0 0 1 .176-.936c.401-.282.621-.674.676-1.23c.088-.886-.477-1.541-1.756-1.672a9.4 9.4 0 0 0-3.394.283a.68.68 0 0 1-.786-.95c.5-1.058.778-1.931.843-2.607c.085-.897-.122-1.547-.606-2.083c-.367-.406-.954-.638-1.174-.59c-.29.062-.479.23-.725.818c-.145.348-.215.644-.335 1.335c-.115.656-.178.952-.309 1.34c-.395 1.176-1.364 2.395-2.665 3.236a12 12 0 0 1-2.937 1.37a.7.7 0 0 1-.2.03zm-.042 8.52c-.323.009-.613-.063-.856-.233c-.31-.217-.456-.559-.459-.953l.003-7.323c-.034-.39.081-.748.353-1.014c.255-.25.588-.368.94-.36h2.185A10.5 10.5 0 0 0 5.99 6.95c1.048-.678 1.82-1.65 2.115-2.526c.101-.302.155-.552.257-1.14c.138-.789.224-1.156.422-1.628c.41-.982.948-1.462 1.69-1.623c.73-.158 1.793.263 2.465 1.007c.745.824 1.074 1.855.952 3.129q-.079.82-.454 1.844a10.5 10.5 0 0 1 2.578-.056c2.007.205 3.134 1.512 2.97 3.164c-.072.712-.33 1.317-.769 1.792c.369.711.516 1.414.424 2.1c-.106.79-.546 1.448-1.278 1.959c-.057.693-.216 1.246-.498 1.66a2.9 2.9 0 0 1-.851.834c-.108.684-.335 1.219-.706 1.595c-.615.626-1.714.999-2.718.931c-.953-.064-1.517-.18-2.847-.6c-.877-.277-2.693-.737-5.43-1.377zm1.701-8.831a.68.68 0 0 1 .68-.682a.68.68 0 0 1 .678.682v7.678a.68.68 0 0 1-.679.681a.68.68 0 0 1-.679-.681z"
            />
          </svg>
          Thích
        </div>

        <!-- Comment -->
        <div
          class="bg-gray-100 hover:bg-gray-200 transition duration-150 ease-in-out rounded-sm p-1 px-2 flex gap-1 border border-gray-200 hover:border-gray-300 cursor-pointer text-base items-center justify-center"
          @click="visibleDialog = true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 24 24"
          >
            <path
              fill="#545454"
              d="M12 2A10 10 0 0 0 2 12a9.9 9.9 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20m0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20"
            />
          </svg>
          Bình luận
        </div>

        <!-- Share -->
        <div
          class="bg-gray-100 hover:bg-gray-200 transition duration-150 ease-in-out rounded-sm p-1 px-2 flex gap-1 border border-gray-200 hover:border-gray-300 cursor-pointer text-base items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#545454"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              color="#545454"
            >
              <path
                d="m20.393 8.032l-1.747-1.517c-1.259-1.093-1.752-1.681-2.434-1.474c-.85.26-.57 1.895-.57 2.447c-1.321 0-2.695-.101-3.998.11c-4.3.7-5.644 3.759-5.644 7.055c1.217-.747 2.433-1.578 3.895-1.924c1.826-.432 3.865-.226 5.747-.226c0 .552-.28 2.188.57 2.447c.772.236 1.175-.38 2.434-1.473l1.747-1.517C21.464 11.03 22 10.564 22 9.996s-.536-1.034-1.607-1.964"
              />
              <path
                d="M10.568 3c-3.86.007-5.882.102-7.174 1.39C2 5.783 2 8.022 2 12.5s0 6.717 1.394 8.109C4.788 22 7.032 22 11.52 22s6.73 0 8.125-1.391C20.615 19.64 20.91 18.26 21 16"
              />
            </g>
          </svg>
          Chia sẽ
        </div>
      </div>

      <Divider />

      <div
        class="flex gap-1 items-center cursor-pointer w-fit"
        @click="toggleSortBy"
      >
        Mới nhất
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
        >
          <path
            fill="#545454"
            stroke="#545454"
            stroke-linejoin="round"
            stroke-width="4"
            d="M36 19L24 31L12 19z"
          />
        </svg>
      </div>

      <div class="mx-auto my-4">
        <!-- Comment container -->
        <div class="flex items-start space-x-3">
          <!-- User avatar -->
          <div class="w-10 h-10 rounded-full bg-gray-200">
            <img
              src="https://via.placeholder.com/40"
              alt="Avatar"
              class="rounded-full w-full h-full object-cover"
            />
          </div>

          <!-- Comment content -->
          <div class="flex-1">
            <!-- Comment box -->
            <div class="bg-gray-100 rounded-lg px-4 py-2">
              <div class="flex items-center space-x-2">
                <h3 class="font-semibold text-sm">Nguyễn Văn A</h3>
                <span class="text-xs text-gray-500">2 giờ trước</span>
              </div>
              <p class="text-sm text-gray-700 mt-1">
                Đây là nội dung của comment. Comment có thể dài hoặc ngắn tùy
                vào nội dung.
              </p>
            </div>

            <!-- Comment actions -->
            <div class="flex space-x-4 mt-2 text-xs text-gray-500">
              <button class="hover:underline">Thích</button>
              <button class="hover:underline">Trả lời</button>
              <button class="hover:underline">...</button>
            </div>
          </div>
        </div>

        <!-- Reply container (optional) -->
        <div class="flex items-start space-x-3 mt-4 ml-10">
          <div class="w-8 h-8 rounded-full bg-gray-200">
            <img
              src="https://via.placeholder.com/32"
              alt="Avatar"
              class="rounded-full w-full h-full object-cover"
            />
          </div>
          <div class="flex-1">
            <div class="bg-gray-100 rounded-lg px-4 py-2">
              <div class="flex items-center space-x-2">
                <h3 class="font-semibold text-sm">Trần Thị B</h3>
                <span class="text-xs text-gray-500">30 phút trước</span>
              </div>
              <p class="text-sm text-gray-700 mt-1">
                Đây là phản hồi cho comment.
              </p>
            </div>
            <div class="flex space-x-4 mt-2 text-xs text-gray-500">
              <button class="hover:underline">Thích</button>
              <button class="hover:underline">Trả lời</button>
              <button class="hover:underline">...</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Comment Box Sticky -->
      <div class="sticky bottom-0 bg-white p-4 px-0 flex flex-col gap-3">
        <Editor editorStyle="height: 50px" />
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Gửi
        </button>
      </div>
    </Dialog>

    <Popover ref="sortBy" :base-z-index="100">
      <div class="flex flex-col gap-1">
        <div
          class="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            viewBox="0 0 24 24"
          >
            <path
              fill="#545454"
              d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.6.6 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27"
            />
          </svg>
          Nổi bật
        </div>

        <div
          class="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            viewBox="0 0 24 24"
          >
            <path
              fill="#545454"
              d="M18.25 4a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 .75-.75M4 18.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75M8.28 7.22a.75.75 0 0 0-1.06 1.06l6.5 6.5a.75.75 0 1 0 1.06-1.06z"
            />
          </svg>
          Mới nhất
        </div>

        <div
          class="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#545454"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h9m-9 6h7m-7 6h7m4-3l3 3l3-3m-3-9v12"
            />
          </svg>
          Cũ nhất
        </div>
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
const actionVisible = ref(false);

const toggleAction = () => {
  actionVisible.value = !actionVisible.value;
};

const visibleDialog = ref(false);

const sortBy = ref();
const toggleSortBy = (event: any) => {
  sortBy.value.toggle(event);
};
</script>

<style lang="scss">
.pb-0 {
  padding-bottom: 0px !important;
}
</style>
