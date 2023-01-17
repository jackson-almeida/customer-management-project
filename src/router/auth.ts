import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './index'

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history'
})

const token = localStorage.getItem('authorization')
router.beforeEach((to, from, next) => {
    if (to.meta.logged === true && !token) return next({ name: 'login' })
    next()
})

export default router