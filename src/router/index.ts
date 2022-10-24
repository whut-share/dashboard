import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { loadGuard } from "./load-guard";
import VueRouterMultiguard from "vue-router-multiguard";
import { authMiddleware } from "./middleware";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/auth/AuthView.vue"),
    children: [
      {
        path: "/",
        component: () => import("@/views/auth/SignInPage.vue"),
      },
      {
        path: "/sign-up",
        component: () => import("@/views/auth/SignUpPage.vue"),
      },
    ],
  },
  {
    path: "/dsh",
    component: () => import("@/views/dashboard/DashboardView.vue"),
    beforeEnter: VueRouterMultiguard([authMiddleware]),
    children: [
      {
        path: "",
        component: () => import("@/views/dashboard/HomePage.vue"),
      },

      {
        path: "project/:project",
        component: () => import("@/views/dashboard/ProjectPage.vue"),
      },
    ],
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(loadGuard);

export default router;
