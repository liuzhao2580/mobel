import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home.vue'
import home from '@/views/home/home.vue'
Vue.use(Router)

export default new Router({
    linkActiveClass: "active",
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/",
            component: Home,
            children: [
                {
                    path: "/home",
                    name: "home",
                    component: home
                }
            ]
        },
        // 点击home页面的搜索框
        {
            path: "/detail",
            name: "detail",
            component: () => import(/* webpackChunkName: "detail" */ '@/views/home/search/detail/detail.vue')
        },
        {
            path: "/",
            component: Home,
            children: [
                {
                    path: '/shop',
                    name: 'shop',
                    component: () => import(/* webpackChunkName: "shop" */ '@/views/shop/shop.vue')
                }
            ]
        },
        {
            path: "/",
            component: Home,
            children: [
                {
                    path: '/shopcar',
                    name: 'shopcar',
                    component: () => import(/* webpackChunkName: "shopcar" */ '@/views/shopcar/shopcar.vue')
                }
            ]
        },
        {
            path: "/",
            component: Home,
            children: [
                {
                    path: '/mine',
                    name: 'mine',
                    component: () => import(/* webpackChunkName: "mine" */ '@/views/mine/mine.vue')
                }
            ]
        }
    ]
})
