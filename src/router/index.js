import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from "@/pages/Login";
import Register from "@/pages/Register";

const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originalPush.call(this, location, resolve, reject);
    } else {
        originalPush.call(this, location, () => { }, () => { });
    }
}

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originalReplace.call(this, location, resolve, reject);
    } else {
        originalReplace.call(this, location, () => { }, () => { });
    }
}


export default new VueRouter({

    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            meta: {showFooter: true}
        },
        {
            name: 'search',
            path: '/search/:keyword?',   // ? 表示参数可传可不传
            component: Search,
            meta: {showFooter: true},
            props: true
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        }
    ]
})