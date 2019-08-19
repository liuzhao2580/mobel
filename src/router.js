import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    linkActiveClass: "active",
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: '/home',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ '@/views/home/home.vue')
        },
        {
            path: '/shop',
            name: 'shop',
            component: () => import(/* webpackChunkName: "shop" */ '@/views/shop/shop.vue')
        },
        {
            path: '/shopcar',
            name: 'shopcar',
            component: () => import(/* webpackChunkName: "shopcar" */ '@/views/shopcar/shopcar.vue')
        },
        {
            path: '/mine',
            name: 'mine',
            component: () => import(/* webpackChunkName: "mine" */ '@/views/mine/mine.vue')
        }
    ]
})
