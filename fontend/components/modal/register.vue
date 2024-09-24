<template>
  <div>
    <Dialog
      v-model:visible="visible"
      modal
      :draggable="false"
      header="Đăng ký"
      :style="{ width: '32rem' }"
    >
      <InputText
        id="username"
        class="w-full mb-4"
        placeholder="Nhập họ và tên"
      />

      <InputText
        id="username"
        class="w-full mb-4"
        placeholder="Email hoặc số điện thoại"
      />

      <div class="flex">
        <InputText
          id="username"
          class="w-full mb-4"
          placeholder="Mã xác nhận"
        />
      </div>

      <InputText id="username" class="w-full mb-4" placeholder="Mật khẩu" />

      <InputText
        id="username"
        class="w-full mb-4"
        placeholder="Xác nhận mật khẩu"
      />

      <Button label="Đăng ký" class="w-full"></Button>

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
const visible = defineModel({ default: false });
const emit = defineEmits(["showForgetPass", "showLogin"]);

function switchToLogin() {
  visible.value = false;
  emit("showLogin");
}
</script>

<style scoped></style>
