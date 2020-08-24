import AuthModule from "./AuthModule.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

export const authRoutes = [
  {
    path: "/auth",
    name: "auth",
    component: AuthModule,
    children: [
      {
        path: "/auth/login",
        name: "auth.login",
        component: Login,
      },
      {
        path: "/auth/register",
        name: "auth.register",
        component: Register,
      },
    ],
  },
];
