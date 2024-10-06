<template>
  <div>
	<div class="mx-auto w-full xl:w-9/12">
        <div class="bg-white rounded-md shadow-sm p-5">
			<div class="font-semibold text-2xl">Thông tin cá nhân</div>
			<div class="w-full mt-5">
				<div class="flex justify-between items-center my-4" >
					<span>Tên người dùng</span>
					<p class="text-gray-400">Nguyễn Văn Sơn</p>
				</div>
				<div class="flex justify-between items-center my-4" >
					<span>Giới tính</span>
					<p class="text-gray-400">Nam</p>
				</div>
				<div class="flex justify-between items-center my-4" >
					<span>Ngày sinh</span>
					<p class="text-gray-400">08/07/2004</p>
				</div>
			</div>
			<div class="flex flex-row-reverse mt-4" >
              <Button
                label="Chỉnh sửa thông tin"
                severity="primary"
                rounded
                type="submit"
              ></Button>
            </div>
		</div>
	</div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({layout: 'setting'})
</script>

<style>

</style>