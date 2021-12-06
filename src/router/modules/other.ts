const home = () => import("@/views/Home.vue");
const about = () => import("@/views/About.vue");

export default [
  { path: "/", name: "index", component: home, meta: { title: "xx" } },
  { path: "/home", name: "home", component: home, meta: { title: "xx" } },
  { path: "/about", name: "about", component: about, meta: { title: "xx" } },
];
