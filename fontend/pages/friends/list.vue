<template>
	<div>
		<div>
			<div class="mx-auto w-full xl:w-9/12 my-5">
				<div class="bg-white rounded-md p-3 shadow-sm">
					<div class="font-semibold text-lg">Tất cả bạn bè</div>
				</div>
			</div>
			<div class="mx-auto w-full xl:w-9/12">
				<div class="bg-white rounded-md shadow-sm p-5">
					<div class="flex items-center mb-2">
						<InputText id="username" aria-describedby="username-help" placeholder="Tìm kiếm"
							class="w-full max-w-[350px] rounded-3xl" />
						<div
							class="ml-1 size-10 hover:bg-gray-300 hover:cursor-pointer rounded-full flex items-center justify-center">
							<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"
								fill="none">
								<path
									d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
									stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</div>
					</div>
					<div class="grid grid-cols-15 gap-5">
						<div class="col-span-6 md:col-span-3 sm:col-span-4 border rounded-lg overflow-hidden shadow-sm"
							v-for="i in 10">
							<img src="https://avatars.githubusercontent.com/u/45328646" alt="">
							<div class="p-1 mb-3">
								<NuxtLink href="/Nguyễn văn Sơn"
									class="font-medium overflow-hidden truncate whitespace-nowrap hover:underline">
									Nguyễn văn Sơn
								</NuxtLink>
							</div>
							<div class="flex flex-col gap-2 mt-2">
								<button
									class="bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600 shadow-sm transition duration-150 ease-in-out">
									Xem thông tin
								</button>
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

<style></style>