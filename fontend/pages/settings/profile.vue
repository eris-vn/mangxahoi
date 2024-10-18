<template>
  <div>
    <div class="mx-auto w-full xl:w-9/12">
      <div class="bg-white rounded-md shadow-sm p-5">
        <div class="font-semibold text-2xl">Thông tin cá nhân</div>

        <!-- Conditionally render static information or edit form -->
        <div v-if="!isEditing" class="w-full mt-5">
          <div class="flex justify-between items-center my-4">
            <span>Tên người dùng</span>
            <p class="text-gray-400">{{ formData.name }}</p>
          </div>
          <div class="flex justify-between items-center my-4">
            <span>Giới tính</span>
            <p class="text-gray-400">{{ formData.gender }}</p>
          </div>
          <div class="flex justify-between items-center my-4">
            <span>Ngày sinh</span>
            <p class="text-gray-400">{{ formData.dob }}</p>
          </div>
          <div class="flex flex-row-reverse mt-4">
            <Button
              label="Chỉnh sửa thông tin"
              severity="primary"
              rounded
              @click="startEditing"
            ></Button>
          </div>
        </div>

        <!-- Edit form -->
        <div v-else class="w-full mt-5">
          <div class="flex justify-between items-center my-4">
            <label for="name">Tên người dùng</label>
            <input
              v-model="formData.name"
              type="text"
              id="name"
              class="border rounded p-2"
            />
          </div>
          <div class="flex justify-between items-center my-4">
            <label for="gender">Giới tính</label>
            <select v-model="formData.gender" id="gender" class="border rounded p-2">
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
          </div>
          <div class="flex justify-between items-center my-4">
            <label for="dob">Ngày sinh</label>
            <input
              v-model="formData.dob"
              type="date"
              id="dob"
              class="border rounded p-2"
            />
          </div>
          <div class="flex flex-row-reverse mt-4">
            <Button
              label="Lưu thông tin"
              severity="success"
              rounded
              @click="saveChanges"
            ></Button>
            <Button
              label="Hủy"
              severity="secondary"
              rounded
              class="mr-2"
              @click="cancelEditing"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// State to track if we are in edit mode
const isEditing = ref(false);

// Form data state
const formData = ref({
  name: 'Nguyễn Văn Sơn',
  gender: 'Nam',
  dob: '2004-07-08',
});

// Functions to handle edit mode
const startEditing = () => {
  isEditing.value = true;
};

const saveChanges = () => {
  // Simply toggle the state back to view mode
  isEditing.value = false;
};

const cancelEditing = () => {
  // Cancel editing and go back to the view mode
  isEditing.value = false;
};
</script>

<style scoped>

</style>
