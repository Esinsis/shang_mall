export default [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/center',
        component: () => import('@/pages/Center'),
        meta: { showFooter: true },
        children: [
            {
                path: 'myorder',
                component: () => import('@/pages/Center/MyOrder')
            },
            {
                path: 'grouporder',
                component: () => import('@/pages/Center/GroupOrder')
            },
            {
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },
    {
        path: '/paySucess',
        component: () => import('@/pages/PaySuccess'),
        meta: { showFooter: true }
    },
    {
        path: '/pay',
        component: () => import('@/pages/Pay'),
        meta: { showFooter: true },
        beforeEnter(to, from, next) {
            if (from.path == '/trade') {
                next();
            }
        }
    },
    {
        path: '/trade',
        component: () => import('@/pages/Trade'),
        meta: { showFooter: true },
        beforeEnter: (to, from, next) => {
            if (from.path == '/shopcart') {
                next();
            }
        },
    },
    {
        path: '/shopcart',
        component: () => import('@/pages/ShopCart'),
        meta: { showFooter: true }
    },
    {
        path: '/addCartSuccess',
        name: 'addCartSuccess',
        component: () => import('@/pages/AddCartSuccess'),
        meta: { showFooter: true }
    },
    {
        path: '/detail/:skuid',
        component: () => import('@/pages/Detail'),
        meta: { showFooter: true }
    },
    {
        path: '/home',
        component: () => import('@/pages/Home'),
        meta: { showFooter: true }
    },
    {
        name: 'search',
        path: '/search/:keyword?',   // ? 表示参数可传可不传
        component: () => import('@/pages/Search'),
        meta: { showFooter: true },
        props: true
    },
    {
        path: '/login',
        component: () => import('@/pages/Login')
    },
    {
        path: '/register',
        component: () => import('@/pages/Register')
    }
]