<template>
  <div>
    <Dialog
      v-model:visible="visible"
      modal
      :show-header="false"
      :pt="{
        root: 'pt-4',
        content: 'pb-4',
      }"
      :style="{ width: '32rem' }"
    >
      <div class="flex justify-between items-center sticky top-0 bg-white pb-3">
        <div class="text-xl text-gray-800">Tạo hồ sơ</div>
        <div class="flex items-center gap-4">
          <div
            class="hover:bg-gray-100 rounded-full transition duration-150 ease-in-out cursor-pointer w-7 h-7 flex items-center justify-center"
            @click="visible = false"
          >
            <Icon name="fa6-solid:xmark" class="text-2xl"></Icon>
          </div>
        </div>
      </div>
      <hr />

      <Form :validation-schema="schema" class="mt-4">
        <!-- Email -->
        <div class="mb-4">
          <label for="name">Họ và tên</label>
          <Field
            name="name"
            placeholder="Họ và tên"
            class="w-full border border-gray-300 rounded-md p-2 px-3 outline-none shadow-sm focus:border-blue-500 transition duration-300 ease-in-out"
          />
          <ErrorMessage name="name" class="block mt-1 text-red-500" />
        </div>

        <div class="mb-4">
          <label for="name">Sinh nhật</label>
          <DatePicker
            v-model="formData.date"
            dateFormat="dd/mm/yy"
            class="w-full"
            placeholder="Sinh nhật"
          />
          <ErrorMessage name="name" class="block mt-1 text-red-500" />
        </div>

        <div class="mb-4">
          <label for="name">Giới tính</label>

          <div class="card">
            <div class="grid grid-cols-3 gap-4">
              <div class="flex items-center border rounded-md p-3 w-full">
                <RadioButton
                  v-model="formData.gender"
                  inputId="ingredient1"
                  name="gender"
                  value="male"
                />
                <label for="ingredient1" class="ml-2">Nam</label>
              </div>
              <div class="flex items-center border rounded-md p-3 w-full">
                <RadioButton
                  v-model="formData.gender"
                  inputId="ingredient2"
                  name="gender"
                  value="female"
                />
                <label for="ingredient2" class="ml-2">Nữ</label>
              </div>
              <div class="flex items-center border rounded-md p-3 w-full">
                <RadioButton
                  v-model="formData.gender"
                  inputId="ingredient3"
                  name="gender"
                  value="other"
                />
                <label for="ingredient3" class="ml-2">Khác</label>
              </div>
            </div>
          </div>
        </div>

        <Button label="Tạo hồ sơ" class="w-full" type="submit"></Button>
      </Form>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
const visible = ref(true);
import * as yup from "yup";

const formData = reactive({
  name: "",
  date: null,
  gender: null,
});

const schema = yup.object({
  email: yup
    .string()
    .email("Email chưa đúng định dạng.")
    .required("Email không được bỏ trống"),
  code: yup
    .string()
    .length(6, "Mã xác nhận phải có 6 ký tự")
    .required("Mã xác nhận không được bỏ trống"),
  password: yup
    .string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Mật khẩu không được bỏ trống"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Mật khẩu xác nhận không khớp")
    .required("Xác nhận mật khẩu không được bỏ trống"),
});
</script>

<style scoped></style>
