import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          // component: () => import('../views/LoginView.vue')
          component: LoginView
        }
      ]
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: () => import('../views/HomeView.vue'),
    //   children: [
    //     {
    //       path: '/login',
    //       name: 'login',
    //       component: () => import('../views/LoginView.vue')
    //     }
    //   ]
    // },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
