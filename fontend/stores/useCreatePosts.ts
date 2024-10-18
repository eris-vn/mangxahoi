import { defineStore } from "pinia";

export const useCreatePost = defineStore("post", () => {
  const status = ref(0);
  const isActive = ref(false);

  return { isActive, status };
});
