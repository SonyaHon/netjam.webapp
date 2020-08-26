import MainModule from "./MainModule.vue";
import Home from "./views/Home.vue";

export const mainRoutes = [
  {
    path: "/",
    name: "main",
    component: MainModule,
    chidlren: [
      {
        path: "/",
        name: "main.home",
        component: Home,
      },
    ],
  },
];
