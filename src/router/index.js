import { createRouter, createWebHistory } from 'vue-router'
import Landing from "@/views/Landing/Index.vue";
import About from "@/views/About/Index.vue";
import Portfolio from "@/views/Portfolio/Index.vue";

const routes = [
  { 
    path: '/', 
    name: 'landing',
    component: Landing 
  },
  { 
    path: '/about',
    name: 'about',
    component: About 
  },
  { 
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
})


export default router