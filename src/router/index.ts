import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { loadGuard } from "./load-guard";
import VueRouterMultiguard from "vue-router-multiguard";
import { authMiddleware } from "./middleware";
import { usePreloadStore } from "@/store";

const loadingMiddleware = (prom: Promise<any>): Promise<any> => {
  const preload_store = usePreloadStore();

  preload_store.setViewLoading(true);
  return prom.finally(() => {
    preload_store.setViewLoading(false);
  });
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => loadingMiddleware(import("@/views/auth/AuthView.vue")),
    children: [
      {
        path: "/",
        redirect: "/sign-in",
      },
      {
        path: "/sign-in",
        component: () =>
          loadingMiddleware(import("@/views/auth/SignInPage.vue")),
      },
      {
        path: "/sign-up",
        component: () =>
          loadingMiddleware(import("@/views/auth/SignUpPage.vue")),
      },
    ],
  },
  {
    path: "/dsh",
    component: () =>
      loadingMiddleware(import("@/views/dashboard/DashboardView.vue")),
    beforeEnter: VueRouterMultiguard([authMiddleware]),
    children: [
      {
        path: "",
        redirect: "/dsh/home",
      },

      {
        path: "home",
        component: () =>
          loadingMiddleware(import("@/views/dashboard/HomePage.vue")),
      },

      {
        path: "developers",
        component: () =>
          loadingMiddleware(
            import("@/views/dashboard/developers/DevelopersView.vue")
          ),
        children: [
          {
            path: "",
            redirect: "/dsh/developers/overview",
          },
          {
            path: "overview",
            component: () =>
              loadingMiddleware(
                import("@/views/dashboard/developers/OverviewPage.vue")
              ),
          },
          {
            path: "api-keys",
            component: () =>
              loadingMiddleware(
                import("@/views/dashboard/developers/KeysPage.vue")
              ),
          },
          {
            path: "webhooks",
            component: () =>
              loadingMiddleware(
                import("@/views/dashboard/developers/WebhooksPage.vue")
              ),
          },
          {
            path: "sync",
            component: () =>
              loadingMiddleware(
                import("@/views/dashboard/developers/SyncPage.vue")
              ),
          },

          {
            path: "syncer",
            component: () =>
              loadingMiddleware(
                import("@/views/dashboard/developers/SyncersPage.vue")
              ),
          },
          {
            path: "dassets",
            component: () =>
              loadingMiddleware(
                import("@/views/dashboard/developers/DassetsPage.vue")
              ),
          },
          {
            path: "wallet-login",
            component: () =>
              loadingMiddleware(
                import("@/views/dashboard/developers/WalletLoginPage.vue")
              ),
          },

          {
            path: "eei/:eei",
            component: () =>
              loadingMiddleware(
                import(
                  "@/views/dashboard/developers/EventEmitterInstancePage.vue"
                )
              ),
          },
        ],
      },

      {
        path: "products",
        component: () =>
          loadingMiddleware(
            import("@/views/dashboard/products/ProductsView.vue")
          ),
        children: [
          {
            path: "",
            redirect: "/dsh/products/overview",
          },
          {
            path: "overview",
            component: () =>
              loadingMiddleware(
                import("@/views/dashboard/products/OverviewPage.vue")
              ),
          },
          {
            path: "wallet-login",
            component: () =>
              loadingMiddleware(
                import("@/views/dashboard/products/WalletLoginPage.vue")
              ),
          },
        ],
      },
    ],
  },
  {
    path: "/dassets-checkout/:session",
    component: () =>
      loadingMiddleware(import("@/views/DassetsCheckoutView.vue")),
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
