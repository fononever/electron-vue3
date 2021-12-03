const home = () => import("@/views/Home.vue");
const about = () => import("@/views/About.vue");

export default [
  { path: "/home", name: "home", component: home, meta: { title: "xx" } },
  { path: "/", name: "about", component: about, meta: { title: "xx" } },
];
