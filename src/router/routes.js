import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";

export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: {showFooter: true}
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