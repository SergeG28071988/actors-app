// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ActorList from "../views/ActorList.vue";
import ActorDetails from "../views/ActorDetails.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/actors", name: "Actors", component: ActorList },
  { path: "/actor/:id", name: "ActorDetails", component: ActorDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
