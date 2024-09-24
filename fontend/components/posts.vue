<template>
  <div class="bg-white rounded-md p-3 shadow-sm mb-4 last:mb-0">
    <!-- Posts Header -->
    <div class="flex justify-between items-center">
      <div class="flex gap-3">
        <img
          class="h-11 w-11 object-cover rounded-full border"
          src="https://i18nexus.com/_next/static/media/nextjs.e54be70c.svg"
          alt=""
        />
        <div>
          <div class="font-bold">NextJS</div>
          <div class="text-sm">15 phút trước</div>
        </div>
      </div>
      <div
        class="hover:bg-gray-100 rounded-full transition duration-150 ease-in-out"
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
    <!-- Posts Title -->
    <h3 class="mt-3">New Update!</h3>
    <!-- Posts Image -->
    <div class="mt-3">
      <img
        src="https://media.licdn.com/dms/image/D4E12AQEIIDCbb5draA/article-cover_image-shrink_720_1280/0/1696065152678?e=2147483647&v=beta&t=vplfPARtNBS22Cj-JVaqLwndsIwkKLcJpAjwNOyphDc"
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
    <div class="mt-3 flex gap-3">
      <!-- Like -->
      <div
        class="bg-gray-100 rounded-lg p-1 px-2 w-fit flex gap-1 border border-gray-200 cursor-pointer"
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
        class="bg-gray-100 rounded-lg p-1 px-2 w-fit flex gap-1 border border-gray-200 cursor-pointer"
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
        class="bg-gray-100 rounded-lg p-1 px-2 w-fit flex gap-1 border border-gray-200 cursor-pointer"
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
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
