import axios from "axios";
import Vue from "vue";

const authInstance = axios.create({
  baseURL: "http://localhost:9091/api",
});

const NJ_AUTH_TOKEN = "nj-jwt-token";

export const authStore = {
  namespaced: true,
  state: {
    user: {
      id: null,
      username: null,
      data: {},
    },
    auth: {},
    navbar: {
      items: [],
      project: null,
    },
  },
  mutations: {
    SET_USER(state, data) {
      state.user = {
        ...data,
      };
    },
    SET_NAVBAR(state, data) {
      state.navbar = {
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
        commit("SET_NAVBAR", res.data.navbar);
      } else {
        throw new Error();
      }
    },
    async fetchSelf({ commit }) {
      try {
        const token = localStorage.getItem(NJ_AUTH_TOKEN);
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
    async canVisitRoute({ commit, state }, route) {
      try {
        const token = localStorage.getItem(NJ_AUTH_TOKEN);
        console.log(token);
        const res = await authInstance.get("user/can-visit-route", {
          params: {
            path: route.fullPath,
            name: route.name,
            token,
          },
        });
        console.log(res);
        if (res && res.data.result === true) {
          commit("SET_NAVBAR", {
            items: res.data.navbar.items || state.navbar.items,
            project: res.data.navbar.project || state.navbar.project,
          });

          return true;
        }
      } catch (e) {
        Vue.$notify({
          group: "main",
          type: "error",
          title: "Something went wrong",
          text:
            "This route do not exist or you do not have permission to go there.",
          duration: -1,
        });
        return false;
      }
    },
  },
};
