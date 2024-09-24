<template>
  <div>
    <Dialog
      v-model:visible="visible"
      modal
      :draggable="false"
      header="Đăng nhập"
      :style="{ width: '32rem' }"
    >
      <InputText
        id="username"
        class="w-full mb-4"
        placeholder="Email hoặc số điện thoại"
      />

      <InputText id="username" class="w-full mb-4" placeholder="Mật khẩu" />

      <div
        class="text-end mb-4 text-blue-600 cursor-pointer"
        @click="switchToForgetPass()"
      >
        Quên mật khẩu?
      </div>

      <Button label="Đăng nhập" class="w-full"></Button>

      <Divider align="center" type="dotted"> hoặc đăng nhập bằng </Divider>

      <div class="flex flex-col gap-3">
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
            alt="Google"
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
