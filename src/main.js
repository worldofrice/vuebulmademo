import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("./pages/Home.vue"), name: "Home" },
  {
    path: "/messages",
    component: () => import("./pages/Messages.vue"),
    name: "Messages",
  },
  { path: "/todo", component: () => import("./pages/ToDo.vue"), name: "ToDo" },
  {
    path: "/modals",
    component: () => import("./pages/Modals.vue"),
    name: "Modals",
  },
  {
    path: "/chuck",
    component: () => import("./pages/ChuckNorris.vue"),
    name: "Chuck Norris",
  },
  {
    path: "/rickandmorty",
    component: () => import("./pages/RickAndMorty.vue"),
    name: "Rick And Morty",
  },
  {
    path: "/canvas",
    component: () => import("./pages/CanvasExample.vue"),
    name: "Canvas",
  },
  {
    path: "/maps",
    component: () => import("./pages/MapExample.vue"),
    name: "Map Example",
  },
  {
    path: "/ws",
    component: () => import("./pages/Websocket.vue"),
    name: "Websocket",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");

if (app == null) {
  window.a = null;
}
