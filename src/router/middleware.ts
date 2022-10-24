import { useAuthStore } from "@/store";
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export const authMiddleware = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const auth_store = useAuthStore();

  if (auth_store.is_user_authed) {
    next();
  } else {
    next("/");
  }
};
