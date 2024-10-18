<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-8">
      <Posts v-for="i in 10"></Posts>
    </div>
    <div class="col-span-4">
      <div class="sticky top-0">
        <div class="bg-white rounded-md p-4 pt-3 shadow-sm mb-4 last:mb-0">
          <div class="text-lg font-bold text-gray-700">Giới thiệu</div>
          <div class="mt-2">
            Group hỗ trợ phát triển cộng đồng Nuxt Việt Nam, nơi lập trình viên
            giao lưu học tập và phát triển các chủ đề liên quan đến NuxtJS
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

<style lang="scss" scoped></style>
