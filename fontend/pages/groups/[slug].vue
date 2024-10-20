<template>
  <div>
    <div class="mx-auto w-full xl:w-9/12">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12">
          <div
            class="bg-white rounded-md shadow-sm overflow-hidden mb-4 last:mb-0"
          >
            <img
              src="https://cdn1.epicgames.com/ue/product/Screenshot/Screenshot23-1920x1080-a2f8a3c1f88f3b5716bdd8c9a2ea0c28.jpg?resize=1&w=1920"
              alt=""
              srcset=""
              class="w-full max-h-[220px] object-cover"
            />
            <div class="flex justify-between items-center p-2 px-3">
              <div class="flex gap-3">
                <div class="h-[60px] w-32 relative">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtgVVwCpgvFkVrnWlkBn6INQ5bAYkjXOiAQ&s"
                    alt=""
                    srcset=""
                    class="top-[-80px] aspect-square rounded-full border-2 border-gray-600 absolute bg-white"
                  />
                </div>
                <div>
                  <div class="text-lg font-semibold">Cộng đồng NuxtJS</div>
                  <div class="flex text-gray-600 text-sm gap-2">
                    <div class="flex items-center gap-1">
                      <Icon
                        name="fa6-solid:earth-asia"
                        class="text-[12px]"
                      ></Icon>
                      Nhóm công khai,
                    </div>
                    <div class="">100k thành viên</div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 flex items-center gap-2"
                >
                  <Icon name="ic:round-groups"></Icon> Tham gia
                </button>
              </div>
            </div>

            <div class="h-[1px] bg-gray-200"></div>

            <Tabs v-model:value="tab" class="rounded-md overflow-hidden">
              <TabList>
                <Tab value="posts"> Bài viết</Tab>
                <Tab value="about"> Giới thiệu </Tab>
                <Tab value="members">Thành viên</Tab>
              </TabList>
            </Tabs>
          </div>

          <NuxtPage></NuxtPage>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "groups",
});

const router = useRouter();
const tab = ref("posts");

watch(tab, (value) => {
  console.log(value);

  onTabChange(value);
});

const onTabChange = (value: any) => {
  switch (value) {
    case "posts":
      router.push("/groups/test");
      break;
    case "about":
      router.push("/groups/test/about");
      break;
    case "members":
      router.push("/groups/test/members");
      break;
    default:
      break;
  }
};
</script>

<style scoped></style>
