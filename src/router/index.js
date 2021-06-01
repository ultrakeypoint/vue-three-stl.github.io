import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Viewer from "@/components/Viewer.vue";
import Viewport from "@/components/Viewport.vue";
import Renderer from "@/components/Renderer.vue";
import STL_Loader from "@/components/STL_Loader.vue";
import Sample from "@/components/Sample.vue";

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/viewer",
    name: "Viewer",
    component: Viewer,
  },
  {
    path: "/viewport",
    name: "Viewport",
    component: Viewport,
  },
  {
    path: "/renderer",
    name: "Renderer",
    component: Renderer,
  },
  {
    path: "/stl_loader",
    name: "STL_Loader",
    component: STL_Loader,
  },
  {
    path: "/sample",
    name: "Sample",
    component: Sample,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
