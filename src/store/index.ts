import { createPinia } from "pinia";

export const pinia = createPinia();

export * from "./auth.store";
export * from "./preload.store";
export * from "./dassets-checkout.store";
export * from "./projects.store";
