import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from "@/pages/Home/TypeNav";
import Carousel from "@/components/Carousel";
import store from "@/store";
import * as API from '@/api';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from 'vue-lazyload'

// 引入Mock 使其生效
import '@/mock/MockServe';
// 引入swiper 样式
import "swiper/css/swiper.min.css";
import loadingImg from '@/assets/loading.gif';

Vue.use(ElementUI);
// 三级联动组件注册为全局组件
Vue.component(TypeNav.name, TypeNav)
// 轮播图组件注册为全局组件
Vue.component(Carousel.name, Carousel)
// 关闭生产提示
Vue.config.productionTip = false;
// 图片懒加载查件
Vue.use(VueLazyload, {
  loading: loadingImg,
});

new Vue({
  beforeCreate(){
    // 配置全局事件总线
    Vue.prototype.$bus = this;
    // 统一暴露API
    Vue.prototype.$API = API;
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app')
