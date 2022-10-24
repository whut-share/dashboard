import { useAuthStore, usePreloadStore } from "@/store";
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export const loadGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const proms: Promise<any>[] = [];

  const auth_store = useAuthStore();
  const preload_store = usePreloadStore();

  if (!auth_store.is_token_loaded) {
    auth_store.loadTokenFromLocalStorage();
  }

  if (auth_store.hasToken && !auth_store.is_user_loaded) {
    proms.push(
      auth_store.sync().catch((err) => {
        auth_store.purgeToken();
        console.error("Damaged auth token, purged", err);
      })
    );
  }

  if (proms.length) {
    preload_store.setLoading(true);
    for (const n of proms) {
      await n;
    }
    preload_store.setLoading(false);
  }

  next();
};
