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
        { path: '', component: () => import('../views/Dashboard.vue'), meta: { title: 'داشبورد' } },
        { path: '/crm', component: () => import('../views/CRM.vue'), meta: { title: 'داشبورد crm' } },
        { path: '/profile', component: () => import('../views/Profile.vue'), meta: { title: 'پروفایل کاربر' } },
        { path: '/products', component: () => import('../views/Products.vue'), meta: { title: 'محصولات' } },
        { path: '/pagination', component: () => import('../views/Pagination.vue'), meta: { title: 'صفحه بندی' } },
        { path: '/cards', component: () => import('../views/Cards.vue'), meta: { title: 'کارت‌ها' } },
        { path: '/contacts', component: () => import('../views/Contact.vue'), meta: { title: 'مخاطبین' } }
      ]
    },
    { path: '/login', component: () => import('../views/Login.vue'), meta: { title: 'ورود' } },
    { path: '/lock', component: () => import('../views/Lock.vue'), meta: { title: 'قفل' } },
    { path: '/lock-2', component: () => import('../views/Lock2.vue'), meta: { title: 'قفل' } },
    { path: '/pricing', component: () => import('../views/Pricing.vue'), meta: { title: 'قیمت‌ها' } },
    { path: '/maintenance', component: () => import('../views/Maintenance.vue'), meta: { title: 'نگهداری' } }
  ]
})


router.beforeEach((to, from, next) => {
  document.title = `پنل مدیریت | ${to.meta.title}`
  next()
})

export default router
