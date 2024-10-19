<template>
  <div>
    <Dialog
      v-model:visible="visible"
      modal
      :draggable="false"
      header="Đăng nhập"
      :style="{ width: '32rem' }"
    >
      <!-- Email -->
      <InputText
        v-model="formData.email"
        id="email"
        class="w-full mb-2"
        placeholder="Email hoặc số điện thoại"
      />
      <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>

      <!-- Mật khẩu -->
      <InputText
        v-model="formData.password"
        id="password"
        class="w-full mb-2"
        type="password"
        placeholder="Mật khẩu"
      />
      <span v-if="errors.password" class="text-red-500">{{
        errors.password
      }}</span>

      <!-- Quên mật khẩu -->
      <div
        class="text-end mb-4 text-blue-600 cursor-pointer"
        @click="switchToForgetPass()"
      >
        Quên mật khẩu?
      </div>

      <!-- Nút đăng nhập -->
      <Button label="Đăng nhập" class="w-full" @click="handleLogin"></Button>

      <Divider align="center" type="dotted"> hoặc đăng nhập bằng </Divider>

      <div class="flex flex-col gap-3" @click="() => login()">
        <div
          class="bg-white border p-2 rounded-3xl flex gap-4 py-3 items-center relative cursor-pointer"
        >
          <img
            class="w-8 absolute"
            src="https://s3.cloudfly.vn/shoperis/2024/09/bae878a333b19f19cea1231d371f9112.avif"
            alt="Google"
          />
          <div class="text-center w-full">Đăng nhập với Google</div>
        </div>
        <div
          class="bg-white border p-2 rounded-3xl flex gap-4 py-3 items-center relative cursor-pointer"
        >
          <img
            class="w-8 absolute"
            src="https://s3.cloudfly.vn/shoperis/2024/09/fc84840f19966153718fc869f65d57da.avif"
            alt="Facebook"
          />
          <div class="text-center w-full">Đăng nhập với Facebook</div>
        </div>
      </div>

      <div class="mt-3 text-center">
        Chưa có tài khoản?
        <span class="text-blue-600 cursor-pointer" @click="switchToRegister()"
          >Tạo tài khoản ngay!</span
        >
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
//------------------- login with google---------------------------------//
import {
  useCodeClient,
  type ImplicitFlowSuccessResponse,
  type ImplicitFlowErrorResponse,
} from "vue3-google-signin";

const handleOnSuccess = async (response: ImplicitFlowSuccessResponse) => {
  // send code to a backend server to verify it.
  console.log("Code: ", response.code);

  const { data: result } = await useApi("/auth/verify/code", {
    method: "POST",
    body: JSON.stringify({
      code: response.code,
    }),
  });
};
const handleOnError = (errorResponse: ImplicitFlowErrorResponse) => {
  console.log("Error: ", errorResponse);
};

const { isReady, login } = useCodeClient({
  onSuccess: handleOnSuccess,
  onError: handleOnError,
  // other options
});
//------------------- end login with google---------------------------------//

// State form data và lỗi
const formData = ref({
  email: "",
  password: "",
});

const errors = ref({
  email: "",
  password: "",
});

// Hàm đăng nhập
async function handleLogin() {
  // Reset lỗi
  errors.value = {
    email: "",
    password: "",
  };

  // Kiểm tra hợp lệ
  if (!formData.value.email) {
    errors.value.email = "Email không được để trống";
  }
  if (!formData.value.password) {
    errors.value.password = "Mật khẩu không được để trống";
  }

  // Nếu có lỗi, dừng lại
  if (Object.values(errors.value).some((error) => error)) {
    return;
  }

  // Gửi dữ liệu nếu không có lỗi
  const response = await fetch("http://localhost:4000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData.value),
  });
  const json = await response.json();
  console.log(json);
}

// Xử lý chuyển đổi các modal
const visible = defineModel({ default: false });
const emit = defineEmits(["showForgetPass", "showRegister"]);

function switchToForgetPass() {
  visible.value = false;
  emit("showForgetPass");
}

function switchToRegister() {
  visible.value = false;
  emit("showRegister");
}
</script>

<style scoped></style>
