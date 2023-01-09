import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from "@/pages/Home/TypeNav";
import Carousel from "@/components/Carousel";
import store from "@/store";

// 引入Mock 使其生效
import '@/mock/MockServe';
// 引入swiper 样式
import "swiper/css/swiper.min.css";

// 三级联动组件注册为全局组件
Vue.component(TypeNav.name, TypeNav)
// 轮播图组件注册为全局组件
Vue.component(Carousel.name, Carousel)
Vue.config.productionTip = false
new Vue({
  beforeCreate(){
    // 配置全局事件总线
    Vue.prototype.$bus = this
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app')
