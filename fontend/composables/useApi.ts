import type { ApiResponse } from "@/types/api";
import type { UseFetchOptions } from "nuxt/app";

function hasCode<T>(data: any): data is ApiResponse<T> {
  return typeof data === "object" && "code" in data;
}

export const useApi = async <T>(
  url: string,
  options: UseFetchOptions<T> = {}
) => {
  const auth = useAuth();
  let accessToken = auth.getAccessToken();
  const options_test = toValue(options);

  const defaults: UseFetchOptions<T> = {
    ...options_test,
    baseURL: "http://localhost:4000/api",
    key: toValue(url),
    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
  };

  const state = reactive<{
    data: T | null;
    pending: boolean;
    error: any;
  }>({
    data: null,
    pending: false,
    error: null,
  });

  const fetchData = async (retry: boolean = true) => {
    try {
      state.pending = true;
      state.data = await $fetch(url, defaults as any);

      if (
        !url.includes("logout") && // Chặn việc lặp lại cho /logout
        hasCode(state.data) &&
        state.data.code == 401 &&
        retry
      ) {
        await auth.refreshTokens();
        if (auth.user) {
          defaults.headers = {
            ...defaults.headers,
            Authorization: `Bearer ${auth.getAccessToken()}`,
          };
          await fetchData(false);
        }
      }
    } catch (error) {
      state.error = error;
    } finally {
      state.pending = false;
    }
  };

  await fetchData();

  const refresh = async () => {
    await fetchData();
  };

  return {
    ...toRefs(state),
    refresh,
  };
};
