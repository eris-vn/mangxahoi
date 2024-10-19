<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Header -->
    <TheHeader></TheHeader>

    <!-- Main content wrapper -->
    <div class="flex flex-1 pt-[60px] overflow-hidden">
      <!-- Sidebar -->
      <aside
        id="sidebar"
        class="bg-white text-gray-800 w-64 p-6 absolute md:relative z-40 transform -translate-x-full md:translate-x-0 transition-transform duration-200 ease-in-out h-full md:h-auto overflow-y-auto"
      >
        <ul id="sidebar">
          <li class="mb-2">
            <NuxtLink
              href="/"
              class="group flex gap-4 py-2 px-4 rounded hover:bg-gray-200"
            >
              <div>
                <svg
                  class="w-6 h-6 text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              Trang chủ</NuxtLink
            >
          </li>
          <li class="mb-2">
            <NuxtLink
              href="/friends"
              class="group flex gap-4 py-2 px-4 rounded hover:bg-gray-200"
            >
              <div>
                <svg
                  class="w-6 h-6 text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              Bạn bè</NuxtLink
            >
          </li>
          <li class="mb-2">
            <NuxtLink
              href="/groups"
              class="group flex gap-4 py-2 px-4 rounded hover:bg-gray-200"
            >
              <div>
                <svg
                  class="w-6 h-6 text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                  />
                </svg>
              </div>
              Hội nhóm</NuxtLink
            >
          </li>
          <!-- <li class="mb-2">
            <NuxtLink
              href="/video"
              class="group flex gap-4 py-2 px-4 rounded hover:bg-gray-200"
            >
              <div>
                <svg
                  class="w-6 h-6 text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.003 3A2 2 0 0 1 21 5v2h-2V5.414L17.414 7h-2.828l2-2h-2.172l-2 2H9.586l2-2H9.414l-2 2H3V5a2 2 0 0 1 2-2h14.003ZM3 9v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Zm2-2.414L6.586 5H5v1.586Zm4.553 4.52a1 1 0 0 1 1.047.094l4 3a1 1 0 0 1 0 1.6l-4 3A1 1 0 0 1 9 18v-6a1 1 0 0 1 .553-.894Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              Video</NuxtLink
            >
          </li> -->
        </ul>
        <Divider />

        <Accordion value="0">
          <AccordionPanel value="0">
            <AccordionHeader>GẦN ĐÂY</AccordionHeader>
            <AccordionContent
              :pt="{
                content: 'p-0',
              }"
            >
              <div class="m-0">
                <ul>
                  <li class="mb-1">
                    <NuxtLink
                      to="/groups/nuxtjs"
                      class="group flex gap-4 items-center py-2 px-4 rounded hover:bg-gray-200"
                    >
                      <div>
                        <img
                          class="h-8 w-8 object-cover rounded-full border"
                          src="https://www.remoterocketship.com/images/blog/Nuxt-icon-for-blog.jpg"
                          alt=""
                        />
                      </div>
                      NuxtJS</NuxtLink
                    >
                  </li>
                  <li class="mb-1">
                    <NuxtLink
                      to="/groups/nextjs"
                      class="group flex gap-4 items-center py-2 px-4 rounded hover:bg-gray-200"
                    >
                      <div>
                        <img
                          class="h-8 w-8 object-cover rounded-full border"
                          src="https://i18nexus.com/_next/static/media/nextjs.e54be70c.svg"
                          alt=""
                        />
                      </div>
                      NextJS</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </aside>

      <!-- Main Content -->
      <div class="flex-1 bg-gray-100 p-8 overflow-y-auto">
        <slot></slot>
      </div>
    </div>

    <!-- Overlay for Mobile -->
    <div
      id="overlay"
      class="hidden fixed inset-0 bg-black opacity-50 z-30"
    ></div>

    <CreatePosts></CreatePosts>
  </div>
</template>

<script lang="ts">
export default {
  name: "DefaultLayout",
};
</script>

<style lang="scss">
.p-accordionheader {
  padding-top: 4px !important;
}
.p-accordioncontent-content {
  padding: 0 !important;
}
</style>
