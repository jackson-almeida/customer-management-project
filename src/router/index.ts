import { createRouter, createWebHistory } from 'vue-router'

const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue'),
      children: [
        {
          path: '/auth/login',
          name: 'login',
          component: () => import('../views/LoginView.vue'),
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {logged: true}
    },
  ]
})

export default routes
