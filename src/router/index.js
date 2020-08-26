import Vue from "vue";
import VueRouter from "vue-router";
import { authRoutes } from "../modules/auth/auth.routes";
import { mainRoutes } from "../modules/main/main.routes";

Vue.use(VueRouter);

const routes = [...authRoutes, ...mainRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
