<template>
  <div>
    <Dialog
      v-model:visible="visible"
      modal
      :draggable="false"
      header="Đăng nhập"
      :style="{ width: '32rem' }"
    >
      <Form @submit="handleLogin" :validation-schema="schema">
        <!-- Email -->
        <div class="mb-4">
          <Field
            v-model="formData.email"
            name="email"
            placeholder="Email"
            class="w-full border border-gray-300 rounded-md p-2 px-3 outline-none shadow-sm focus:border-gray-500 transition duration-300 ease-in-out"
          />
          <ErrorMessage name="email" class="block mt-1 text-red-500" />
        </div>

        <!-- Mật khẩu -->
        <div class="mb-4">
          <Field
            type="password"
            v-model="formData.password"
            name="password"
            placeholder="Mật khẩu"
            class="w-full border border-gray-300 rounded-md p-2 px-3 outline-none shadow-sm focus:border-gray-500 transition duration-300 ease-in-out"
          />
          <ErrorMessage name="password" class="block mt-1 text-red-500" />
        </div>

        <!-- Quên mật khẩu -->
        <div
          class="text-end mb-4 text-blue-600 cursor-pointer"
          @click="switchToForgetPass()"
        >
          Quên mật khẩu?
        </div>

        <!-- Nút đăng nhập -->
        <Button label="Đăng nhập" class="w-full" @click="handleLogin"></Button>
      </Form>

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
import * as yup from "yup";
import {
  useCodeClient,
  type ImplicitFlowSuccessResponse,
  type ImplicitFlowErrorResponse,
} from "vue3-google-signin";
import type { ApiResponse } from "~/types/api";

const toast = useToast();
const auth = useAuth();

const schema = yup.object({
  email: yup
    .string()
    .email("Email chưa đúng định dạng.")
    .required("Email không được bỏ trống"),
  password: yup
    .string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Mật khẩu không được bỏ trống"),
});

const handleOnSuccess = async (response: ImplicitFlowSuccessResponse) => {
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
});
//------------------- end login with google---------------------------------//

// State form data và lỗi
const formData = reactive({
  email: "",
  password: "",
});

// Xử lý đăng nhập
async function handleLogin() {
  const { data: response } = await useApi<
    ApiResponse<{
      access_token: string;
      refresh_token: string;
    }>
  >("/auth/login", {
    method: "POST",
    body: formData,
    watch: false,
  });

  if (response.value?.code == 200) {
    auth.setTokens(
      response.value.data.access_token,
      response.value.data.refresh_token
    );
    toast.success(response.value.message);
  } else {
    toast.error(response.value?.message ?? "Lấy dữ liệu thất bại");
  }
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
