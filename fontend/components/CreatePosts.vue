<template>
  <div>
    <Dialog
      v-model:visible="store.isActive"
      modal
      :show-header="false"
      :pt="{
        root: 'pt-4',
        content: 'pb-4',
      }"
      :style="{ width: '46rem' }"
    >
      <div class="flex justify-between items-center sticky top-0 bg-white pb-3">
        <div class="text-xl text-gray-800">Tạo bài viết</div>
        <div class="flex items-center gap-4">
          <div
            class="hover:bg-gray-100 rounded-full transition duration-150 ease-in-out cursor-pointer w-7 h-7 flex items-center justify-center"
            @click="store.isActive = false"
          >
            <Icon name="fa6-solid:xmark" class="text-2xl"></Icon>
          </div>
        </div>
      </div>
      <hr />
      <div class="flex justify-between items-center sticky top-0 bg-white mt-4">
        <div class="flex gap-3">
          <img
            class="h-14 w-14 object-cover rounded-full border"
            src="https://i18nexus.com/_next/static/media/nextjs.e54be70c.svg"
            alt=""
          />
          <div>
            <div class="font-bold">NextJS</div>
            <Select
              v-model="store.status"
              :options="[
                { name: 'Công khai', icon: 'mdi:user-group', value: 0 },
                {
                  name: 'Riêng tư',
                  icon: 'material-symbols:lock-outline',
                  value: 1,
                },
              ]"
              optionLabel="name"
              placeholder="Công khai"
              class="w-full"
              :pt="{
                root: 'create-post',
              }"
            >
              <template #value="slotProps">
                <div v-if="slotProps.value" class="flex items-center gap-2">
                  <Icon :name="slotProps.value.icon"></Icon>
                  <div>{{ slotProps.value.name }}</div>
                </div>
                <span v-else>
                  {{ slotProps.placeholder }}
                </span>
              </template>
              <template #option="slotProps">
                <div class="flex items-center gap-2">
                  <Icon :name="slotProps.option.icon"></Icon>
                  <div>{{ slotProps.option.name }}</div>
                </div>
              </template>
            </Select>
          </div>
        </div>
      </div>

      <Editor editorStyle="height: 150px" class="mt-4" />

      <div class="flex justify-end gap-2 mt-4">
        <Button
          type="button"
          label="Cancel"
          severity="secondary"
          @click="store.isActive = false"
        ></Button>
        <Button
          type="button"
          label="Đăng bài"
          @click="store.isActive = false"
        ></Button>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
const store = useCreatePost();
</script>

<style lang="scss">
.create-post {
  .p-select-label {
    padding: 1px 10px;
    padding-right: 0px;
  }
}
</style>
