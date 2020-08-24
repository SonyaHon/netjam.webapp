import Vue from "vue";
import VueRouter from "vue-router";
import { authRoutes } from "../modules/auth/auth.routes";

Vue.use(VueRouter);

const routes = [...authRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
