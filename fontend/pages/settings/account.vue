<template>
	<div class="mx-auto w-full xl:w-9/12">
        <div class="bg-white rounded-md shadow-sm p-5">
			<div class="font-semibold text-2xl">Tài khoản</div>
			<div class="w-full mt-5">
				<div class="flex justify-between group hover:cursor-pointer"  @click="visible = true">
					<span>Thay đổi mật khẩu</span>
					<div>
						*****
						<span class="group-hover:bg-gray-200 size-6 rounded-full inline-flex items-center justify-center ">
						<Icon name="eva:arrow-ios-forward-fill" />
						</span>
					</div>
				</div>
			</div>
		</div>
		<Dialog v-model:visible="visible" modal header="Thay đổi mật khẩu" :style="{ width: '25rem' }">
			<div class="flex items-center gap-4 mb-4">
                <label for="oldPW" class="font-semibold w-24">Mật khẩu cũ</label>
                <InputText id="oldPW" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex items-center gap-4 mb-4">
                <label for="newPW" class="font-semibold w-24">Mật khẩu mới</label>
                <InputText id="newPW" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex items-center gap-4 mb-8">
                <label for="rePW" class="font-semibold w-24">nhập lại mật khẩu mới</label>
                <InputText id="rePW" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex justify-end gap-2">
                <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
                <Button type="button" label="Save" @click="visible = false"></Button>
            </div>
        </Dialog>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const visible = ref(false);
definePageMeta({layout: 'setting'})

</script>

<style>
</style>