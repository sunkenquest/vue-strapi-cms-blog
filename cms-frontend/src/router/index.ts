import { createRouter, createWebHistory } from 'vue-router'
import BlogPage from '@/pages/BlogPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BlogPage
    },
  ]
})

export default router
