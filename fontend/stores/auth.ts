import type { ApiResponse } from "@/types/api";
import { defineStore } from "pinia";

export const useAuth = defineStore("auth", () => {
  const accessToken = useCookie("accessToken", { maxAge: 30 * 24 * 60 * 60 });
  const refreshToken = useCookie("refreshToken", { maxAge: 30 * 24 * 60 * 60 });
  const user = ref();

  async function getUser() {
    if (accessToken.value) {
      const { data } = await useApi<
        ApiResponse<{
          user: {
            name: string;
            money: string;
          };
        }>
      >("/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken.value}`,
        },
      });

      if (data.value?.code == 200) {
        user.value = data.value.data;
      } else if (data.value?.code == 401) {
        await refreshTokens();
      }
    }
  }

  async function refreshTokens() {
    if (!refreshToken.value) {
      signOut();
      return;
    }

    const { data } = await useApi<
      ApiResponse<{
        access_token: string;
        refresh_token: string;
      }>
    >("/auth/refresh", {
      method: "POST",
      body: {
        token: refreshToken.value,
      },
    });

    if (data.value?.code == 200) {
      accessToken.value = data.value.data.access_token;
      refreshToken.value = data.value.data.refresh_token;
      await getUser();
    } else {
      signOut();
    }
  }

  async function setTokens(access: string, refresh: string) {
    accessToken.value = access;
    refreshToken.value = refresh;
    await getUser();
  }

  async function signOut() {
    console.log("test");

    await useApi("/auth/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken.value}`,
      },
    });
    accessToken.value = null;
    refreshToken.value = null;
    user.value = null;
    navigateTo({ path: "/login" });
  }

  function getAccessToken() {
    return accessToken.value;
  }

  function getRefreshToken() {
    return refreshToken.value;
  }

  return {
    user,
    signOut,
    setTokens,
    getUser,
    getAccessToken,
    getRefreshToken,
    refreshTokens,
  };
});
