<template>
  <div>
    <div class="mx-auto w-full xl:w-9/12">
      <div class="bg-white rounded-md p-4 pt-3 shadow-sm">
        <div class="font-semibold text-xl ml-5">Đăng bài</div>
        <div class="flex flex-col w-full items-center">
          <form @submit.prevent="handleSubmit" class="w-5/6 mt-5">
            <Textarea
              v-model="description"
              rows="4"
              id="description"
              aria-describedby="username-help"
              placeholder="Bạn đang nghĩ gì?"
              class="w-full"
            />
            <div class="my-5">
              <Button label="Tag tên" severity="secondary" rounded />
            </div>
            <Textarea
              v-model="title"
              rows="5"
              id="title"
              aria-describedby="username-help"
              placeholder="Bạn đang nghĩ gì?"
              class="w-full"
            />
            <div class="flex flex-row-reverse mt-4">
              <Button label="Đăng bài" severity="info" rounded type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Khai báo các biến để lưu dữ liệu input
const description = ref("");
const title = ref("");

// Hàm xử lý sự kiện submit
const handleSubmit = () => {
  // Log dữ liệu khi form được submit
  console.log("Title:", title.value);
  console.log("Description:", description.value);
};
</script>

<style></style>
