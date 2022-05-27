import { createRouter, createWebHistory } from 'vue-router'
import Main from '../layout/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        { path: '', component: () => import('../views/Dashboard.vue') },
        { path: '/crm', component: () => import('../views/CRM.vue') }
      ]
    },
  ]
})

export default router
