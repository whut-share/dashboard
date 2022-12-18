import { loadStripe } from "@/plugins";
import {
  useAuthStore,
  useChainNetworksStore,
  usePreloadStore,
  useProjectsStore,
} from "@/store";
import { reactive } from "vue";
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export const loadGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const proms: (() => Promise<any>)[] = [];

  await loadStripe();

  const auth_store = useAuthStore();
  const projects_store = useProjectsStore();
  const preload_store = usePreloadStore();
  const chain_networks_store = useChainNetworksStore();

  if (!auth_store.is_token_loaded) {
    auth_store.loadTokenFromLocalStorage();
  }

  if (auth_store.hasToken && !auth_store.is_user_loaded) {
    proms.push(async () => {
      return auth_store.sync().catch((err) => {
        auth_store.purgeToken();
        console.error("Damaged auth token, purged", err);
      });
    });
  }

  if (!projects_store.is_loaded) {
    proms.push(async () => {
      if (auth_store.is_user_authed) {
        return projects_store.sync();
      }
    });
  }

  if (!chain_networks_store.is_loaded) {
    proms.push(async () => {
      return chain_networks_store.sync();
    });
  }

  // ---

  if (proms.length) {
    console.log("Load guard is loading", proms.length, "promises");

    preload_store.setLoading(true);
    for (const n of proms) {
      await n().catch((err) => console.error("Load guard error:", err));
    }
    preload_store.setLoading(false);
  }

  next();
};
