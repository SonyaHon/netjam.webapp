import axios from "axios";

const authInstance = axios.create({
  baseURL: "http://localhost:9091/api",
});

export const authStore = {
  namespaced: true,
  state: {
    user: {
      id: null,
      username: null,
      data: {},
    },
    auth: {},
  },
  mutations: {
    SET_USER(state, data) {
      state.user = {
        ...data,
      };
    },
  },
  actions: {
    async register(_, data) {
      await authInstance.post("/user/create", {
        username: data.username,
        password: data.password,
      });
    },
    async login({ commit }, data) {
      const res = await authInstance.post("/auth/login", {
        username: data.username,
        password: data.password,
      });
      if (res && res.data && res.data.token) {
        localStorage.setItem("nj-jwt-token", res.data.token);
        commit("SET_USER", { ...res.data.data });
      } else {
        throw new Error();
      }
    },
    async fetchSelf({ commit }, token) {
      try {
        const res = await authInstance.get("user/fetch-self", {
          params: {
            token,
          },
        });
        commit("SET_USER", { ...res.data });
        return "ok";
      } catch (e) {
        if (e.response.data && e.response.data.code === "0x04") {
          return "login";
        }
        return "error";
      }
    },
  },
};
