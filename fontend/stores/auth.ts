import { defineStore } from "pinia";

export const useAuth = defineStore("auth", () => {
  const token = useCookie("token", { maxAge: 30 * 24 * 60 * 60 });
  const user = ref();

  async function getUser() {
    if (token.value) {
      let { data } = await useApi<{
        status: number;
        data: {
          user: {
            name: string;
            money: string;
          };
        };
      }>("/api/user/me", {
        method: "POST",
      });

      if (data.value?.status == 200) {
        user.value = data.value?.data.user;
      } else if (data.value?.status == 401) {
        signOut();
      }
    }
    return "";
  }

  async function signIn(username: string, password: string, captcha: any) {
    return new Promise(async (resolve, reject) => {
      let { data: requests } = await useApi<{
        status: number;
        data: {
          token: string;
        };
        msg: string;
      }>(`/api/auth/login`, {
        body: {
          username,
          password,
          captcha,
        },
      });

      if (requests.value?.status == 200) {
        token.value = requests.value.data.token;

        getUser();
        resolve(`${requests.value.msg}` || "Lấy dữ liệu thất bại");
      } else {
        reject(`${requests.value?.msg}` || "Lấy dữ liệu thất bại");
      }
    });
  }

  async function setToken(t: string) {
    token.value = t;
    await getUser();
  }

  async function signOut() {
    await useApi("/api/user/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });
    token.value = null;
    user.value = null;
  }

  function getToken() {
    return token.value;
  }

  return { user, signIn, signOut, setToken, getUser, getToken };
});
