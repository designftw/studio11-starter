import { createApp, defineAsyncComponent } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

function loadComponent(name) {
  return () => import(`./${name}/main.js`).then((m) => m.default());
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // Add your routes here
    { path: "/", component: loadComponent("home") },
    { path: "/profile", component: loadComponent("profile") },
    { path: "/chat/:chatId", component: loadComponent("chat"), props: true },
  ],
});

createApp({
  template: "#template",
})
  .use(router)
  .mount("#app");
