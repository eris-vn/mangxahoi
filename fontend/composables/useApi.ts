import type { UseFetchOptions } from "nuxt/app";

export const useApi = async <T>(
  url: string | (() => string),
  options?: Omit<UseFetchOptions<T>, "default">
) => {
  const auth = useAuth();
  const accessToken = auth.getToken();

  const api = $fetch.create({
    // baseURL: "https://api.shoperis.vn",
    baseURL: "http://localhost:4000/api",
    onRequest({ request, options, error }) {
      if (accessToken) {
        const headers = (options.headers ||= {});
        if (Array.isArray(headers)) {
          headers.push(["Authorization", `Bearer ${accessToken}`]);
        } else if (headers instanceof Headers) {
          headers.set("Authorization", `Bearer ${accessToken}`);
        } else {
          headers.Authorization = `Bearer ${accessToken}`;
        }
      }
    },
  });

  return useFetch(url, {
    ...options,
    $fetch: api,
  });
};
