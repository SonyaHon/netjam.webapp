import AuthModule from "./AuthModule.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

export const authRoutes = [
  {
    path: "/auth",
    name: "auth",
    component: AuthModule,
    meta: {
      hideNav: true,
    },
    children: [
      {
        path: "/auth/login",
        name: "auth.login",
        component: Login,
        meta: {
          hideNav: true,
        },
      },
      {
        path: "/auth/register",
        name: "auth.register",
        component: Register,
        meta: {
          hideNav: true,
        },
      },
    ],
  },
];
