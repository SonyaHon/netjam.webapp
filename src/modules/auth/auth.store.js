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
      commit("SET_USER", { ...res.data });
    },
    async fetchSelf({ commit }) {
      try {
        const res = await authInstance.get("user/fetch-self");
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
