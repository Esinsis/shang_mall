import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes';
import store from '@/store';

Vue.use(VueRouter)

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

let router = new VueRouter({
    routes,
    scrollBehavior() {
        return { y: 0 }
    }
})

/**
 * next 放行函数 
 *  next(): 放行所有路由跳转
 *  next(path): 跳转到指定path
 *  next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，
 *               那么 URL 地址会重置到 from 路由对应的地址。
 */
// 全局前置守卫
router.beforeEach(async (to, from, next) => {

    let token = store.state.user.token;
    let nickName = store.state.user.userInfo.nickName;
    // 已经登录
    if (token) {
        // 如果已经登录还要访问login，则跳转到首页
        if (to.path == '/login') {
            next('/');
        } else {
            // 如果用户信息不存在，则重新获取
            if (!nickName) {
                try {
                    await store.dispatch('getUserInfo');
                    next();
                } catch (error) {
                    // 获取不到用户信息，(token过期),清除本地信息(token, 用户信息等)
                    await store.dispatch('logout');
                    next('/login')
                }
            } else {
                next();
            }
        }
    } else {
        // 未登录不能去pay|paySuccess等
        let toPath = to.path;
        if (toPath.indexOf('trade') != -1 || toPath.indexOf('pay') != -1 || toPath.indexOf('center') != -1) {
            next('/login?redirect=' + toPath);
        } else {
            next();
        }
    }
})

export default router;