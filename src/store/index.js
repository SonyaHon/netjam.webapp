import Vue from "vue";
import Vuex from "vuex";
import { authStore } from "../modules/auth/auth.store";
import { mainStore } from "../modules/main/main.store";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth: authStore,
    main: mainStore,
  },
});
