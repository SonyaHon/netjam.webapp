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
    async fetchUser({ commit }) {
      commit("SET_USER", {
        name: "asd",
        hasLife: Math.random(),
      });
    },
  },
};
