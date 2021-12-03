import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routesConfig";
import { routerBefore, routerAfter } from "./routesGuide";

export const router = createRouter({
  history: createWebHistory(""),
  routes,
});

routerBefore(router);
routerAfter(router);
