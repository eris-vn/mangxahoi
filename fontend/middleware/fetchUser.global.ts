export default defineNuxtRouteMiddleware(async (to, from) => {
  try {
    const auth = useAuth();

    if (auth.getAccessToken() && !auth.user) {
      if (import.meta.server) {
        await useAsyncData("user", () => auth.getUser().then(() => true));
      } else {
        auth.getUser();
      }
    }
  } catch (error) {}
});
