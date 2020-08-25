import axios from "axios";

const authInstance = axios.create({
  baseURL: "http://localhost:9091/api",
});

export const authStore = {
  namespaced: true,
  state: {
    user: {},
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
    async fetchUser({ commit }) {
      const res = await authInstance.get("user/fetch-self");
      commit("SET_USER", { ...res.data });
    },
  },
};
