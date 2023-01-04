import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from "@/pages/Home/TypeNav";
import store from "@/store";

// 三级联动组件注册为全局组件
Vue.component(TypeNav.name, TypeNav)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
