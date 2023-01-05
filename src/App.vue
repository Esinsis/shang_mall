<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    // App组件只会挂载一次，防止三级联动模块每次挂载时都会请求后端接口
    this.$store.dispatch('home/getCategories')
  }
}
</script>

<style>

</style>
