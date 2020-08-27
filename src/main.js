import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import Notifications from "vue-notification";

Vue.config.productionTip = false;
Vue.use(Notifications);

router.beforeEach(async (to, from, next) => {
  if (["auth.login", "auth.register"].indexOf(to.name) !== -1) {
    next();
    return;
  }
  const canGo = await store.dispatch("auth/canVisitRoute", to);
  if (canGo) {
    next();
    return;
  }
  router.replace("/");
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount("#app");
