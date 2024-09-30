<template>
  <div>
     <!-- friends request -->
    <div>
      <div class="mx-auto w-full xl:w-9/12 mb-5">
        <div class="bg-white rounded-md p-3 shadow-sm">
          <div class="font-semibold text-lg">Lời mời Kết bạn</div>
        </div>
      </div>
      <div class="mx-auto w-full xl:w-9/12">
        <div class="bg-white rounded-md shadow-sm p-5">
			<div class="grid grid-cols-12 gap-5">
				<div class="col-span-6 md:col-span-3 sm:col-span-4 border rounded-lg overflow-hidden shadow-sm " v-for="i in 10">
              <img src="https://avatars.githubusercontent.com/u/45328646" alt="">
              <div class="p-2 mb-2">
                <NuxtLink href="/Nguyễn văn Sơn"
                  class="font-medium overflow-hidden truncate whitespace-nowrap hover:underline">Nguyễn văn Sơn
                </NuxtLink>
              </div>
              <div class="flex flex-col gap-2 p-2">

                <Button label="Xác nhận" severity="info" raised></Button>
                <Button label="Từ chối" severity="secondary" raised></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
	
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>