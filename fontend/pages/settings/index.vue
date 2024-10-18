<template>
  <div class="mx-auto w-full xl:w-9/12">
    <div class="bg-white rounded-md shadow-sm p-5">
      <div class="font-semibold text-2xl">Cài đặt</div>
      <div class="grid grid-cols-12 gap-5 my-5">
        <div class="col-span-4 bg-slate-200 h-72 rounded-lg p-5 hover:cursor-pointer hover:bg-gray-200">
          <div class="flex items-center justify-center h-32">
            <div class=" size-16 ">
              <img draggable="false" height="100%" width="100%" alt="" class="xl1xv1r"
                referrerpolicy="origin-when-cross-origin"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/vQJhunAu_kM.png">
            </div>
             
          </div>
          <div>
            <p class="text-lg">Chặn</p>
            <h5 class=" text-gray-400">Xem lại những người mà bạn từng chặn hoặc thêm ai đó vào danh sách chặn của bạn.</h5>
          </div>
        </div>
        <div class="col-span-4 bg-slate-200 h-72 rounded-lg p-5 hover:cursor-pointer hover:bg-gray-200">
          <div class="flex items-center justify-center h-32">
            <div class=" size-16 ">
              <img draggable="false" height="100%" width="100%" alt="" class="xl1xv1r" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/2ZgtF5KmDhL.png">
            </div>
             
          </div>
          <div>
            <p class="text-lg">Nhật ký hoạt động</p>
            <h5 class=" text-gray-400">Xem và quản lý hoạt động của bạn trên Facebook.</h5>
          </div>
        </div>
        <div class="col-span-4 bg-slate-200 h-72 rounded-lg p-5 hover:cursor-pointer hover:bg-gray-200">
          <div class="flex items-center justify-center h-32">
            <div class=" size-16 ">
              <img draggable="false" height="100%" width="100%" alt="" class="xl1xv1r" referrerpolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/74SnwhHSvy2.png">
            </div>
             
          </div>
          <div>
            <p class="text-lg">Chế độ tối</p>
            <h5 class=" text-gray-400">Chọn xem bạn có muốn sử dụng chế độ tối không.</h5>
          </div>
        </div>
      </div>
      <div class="font-semibold text-2xl">Bạn đang tìm gì khác ư?</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'setting'
})

</script>

<style></style>