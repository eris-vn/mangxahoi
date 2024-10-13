<template>
  <div>
    <Dialog
      v-model:visible="visible"
      modal
      :draggable="false"
      header="Đăng ký"
      :style="{ width: '32rem' }"
    >
      <!-- Họ và tên -->
      <InputText
        v-model="formData.name"
        id="fullName"
        class="w-full mb-2"
        placeholder="Nhập họ và tên"
      />
      <span v-if="errors.name" class="text-red-500">{{ errors.name }}</span>

      <!-- Email -->
      <InputText
        v-model="formData.email"
        id="email"
        class="w-full mb-2"
        placeholder="Nhập email"
      />
      <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>

      <!-- Giới tính -->
      <div class="flex flex-wrap gap-4 justify-around mb-4">
        <div class="flex items-center">
          <RadioButton
            v-model="formData.gender"
            inputId="ingredient1"
            name="gender"
            value="Male"
          />
          <label for="ingredient1" class="ml-2">Nam</label>
        </div>
        <div class="flex items-center">
          <RadioButton
            v-model="formData.gender"
            inputId="ingredient2"
            name="gender"
            value="Female"
          />
          <label for="ingredient2" class="ml-2">Nữ</label>
        </div>
      </div>
      <span v-if="errors.gender" class="text-red-500">{{ errors.gender }}</span>

      <!-- Mật khẩu -->
      <InputText
        v-model="formData.password"
        id="password"
        class="w-full mb-2"
        type="password"
        placeholder="Mật khẩu"
      />
      <span v-if="errors.password" class="text-red-500">{{ errors.password }}</span>

      <!-- Xác nhận mật khẩu -->
      <InputText
        v-model="formData.confirmPassword"
        id="confirmPassword"
        class="w-full mb-2"
        type="password"
        placeholder="Xác nhận mật khẩu"
      />
      <span
        v-if="errors.confirmPassword"
        class="text-red-500"
        >{{ errors.confirmPassword }}</span
      >

      <!-- Nút Đăng ký -->
      <Button label="Đăng ký" class="w-full" @click="handleRegister"></Button>

      <div class="mt-3 text-center">
        Đã có tài khoản?
        <span class="text-blue-600 cursor-pointer" @click="switchToLogin()"
          >Đăng nhập ngay!</span
        >
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  gender: '',
  password: '',
  confirmPassword: ''
});

const errors = ref({
  name: '',
  email: '',
  gender: '',
  password: '',
  confirmPassword: ''
});

const visible = defineModel({ default: false });
const emit = defineEmits(["showForgetPass", "showLogin"]);

function switchToLogin() {
  visible.value = false;
  emit("showLogin");
}

function validateEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

async function handleRegister() {
  // Reset lỗi
  errors.value = {
    name: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: ''
  };

  // Kiểm tra hợp lệ
  if (!formData.value.name) {
    errors.value.name = 'Họ và tên không được để trống';
  }
  if (!formData.value.email) {
    errors.value.email = 'Email không được để trống';
  } else if (!validateEmail(formData.value.email)) {
    errors.value.email = 'Email không hợp lệ';
  }
  if (!formData.value.gender) {
    errors.value.gender = 'Vui lòng chọn giới tính';
  }
  if (!formData.value.password) {
    errors.value.password = 'Mật khẩu không được để trống';
  }
  if (formData.value.password !== formData.value.confirmPassword) {
    errors.value.confirmPassword = 'Mật khẩu xác nhận không khớp';
  }

  // Nếu có lỗi, dừng lại
  if (Object.values(errors.value).some((error) => error)) {
    return;
  }

  // Nếu không có lỗi, gửi dữ liệu
  const response = await fetch('http://localhost:4000/auth/register', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData.value)
  });

  const json = await response.json();
  console.log(json);
}
</script>

<style scoped></style>
