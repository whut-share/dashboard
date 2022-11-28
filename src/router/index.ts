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

      {
        path: "developers",
        component: () =>
          import("@/views/dashboard/developers/DevelopersView.vue"),
        children: [
          {
            path: "",
            component: () =>
              import("@/views/dashboard/developers/OverviewPage.vue"),
          },
          {
            path: "api-keys",
            component: () =>
              import("@/views/dashboard/developers/KeysPage.vue"),
          },
          {
            path: "webhooks",
            component: () =>
              import("@/views/dashboard/developers/WebhooksPage.vue"),
          },
          {
            path: "sync",
            component: () =>
              import("@/views/dashboard/developers/SyncPage.vue"),
          },

          {
            path: "syncer",
            component: () =>
              import("@/views/dashboard/developers/SyncersPage.vue"),
          },
          {
            path: "dassets",
            component: () =>
              import("@/views/dashboard/developers/DassetsPage.vue"),
          },
          {
            path: "wallet-login",
            component: () =>
              import("@/views/dashboard/developers/WalletLoginPage.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/dassets-checkout/:session",
    component: () => import("@/views/DassetsCheckoutView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
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
