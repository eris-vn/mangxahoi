<template>
  <div>
    <Dialog
      v-model:visible="visible"
      modal
      :draggable="false"
      header="Đăng ký"
      :style="{ width: '32rem' }"
    >
      <!-- Email -->
      <InputText
        v-model="formData.email"
        id="email"
        class="w-full mb-4"
        placeholder="Nhập email"
      />
      <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>

      <div class="flex relative">
        <InputText
          id="codeOTP"
          class="w-full mb-4"
          placeholder="Mã xác nhận"
        />
        <div class="absolute translate-y-1/2 right-5 border-l border-[#ccc] cursor-pointer" @click="sendEmail"><span class="text-[#4A88FC] px-4 hover:opacity-80">Gửi mã</span></div>
      </div>
      <span v-if="errors.OTP" class="text-red-500">{{ errors.OTP }}</span>
     <!-- Họ và tên -->
     <InputText
        v-model="formData.name"
        id="fullName"
        class="w-full mb-4"
        placeholder="Nhập họ và tên"
      />
      <span v-if="errors.name" class="text-red-500">{{ errors.name }}</span>

      <!-- Mật khẩu -->
      <InputText
        v-model="formData.password"
        id="password"
        class="w-full mb-4"
        type="password"
        placeholder="Mật khẩu"
      />
      <span v-if="errors.password" class="text-red-500">{{ errors.password }}</span>

      <!-- Xác nhận mật khẩu -->
      <InputText
        v-model="formData.confirmPassword"
        id="confirmPassword"
        class="w-full mb-4"
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
import type { RefSymbol } from '@vue/reactivity';
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  OTP: '',
  password: '',
  confirmPassword: ''
});

const errors = ref({
  name: '',
  email: '',
  OTP: '',
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
    OTP: '',
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
  if (!formData.value.OTP) {
    errors.value.OTP = 'Vui lòng nhập mã';
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
const sendEmail = async ()=>{
  const response = await fetch('http://localhost:4000/auth/sendEmail', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email: formData.value.email})
  });
  const json = await response.json();
  console.log(json);
}
</script>

<style scoped></style>
