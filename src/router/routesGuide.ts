import { Router } from "vue-router";

const pageStack: string[] = [];
export function routerBefore(router: Router) {
  router.beforeEach((to, from, next) => {
    next();
  });
}

export function routerAfter(router: Router) {
  router.afterEach((to, from) => {});
}
