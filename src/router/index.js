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
        { path: '', component: () => import('../views/Dashboard.vue'), meta: { title: 'داشبودر' } },
        { path: '/crm', component: () => import('../views/CRM.vue'), meta: { title: 'داشبورد crm' } },
      ]
    },
    { path: '/login', component: () => import('../views/Login.vue'), meta: { title: 'ورود' } },
    { path: '/lock', component: () => import('../views/Lock.vue'), meta: { title: 'قفل' } }
  ]
})


router.beforeEach((to, from, next) => {
  document.title = `پنل مدیریت | ${to.meta.title}`
  next()
})

export default router
