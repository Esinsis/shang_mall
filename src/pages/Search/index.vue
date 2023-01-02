<template>
  <h1>{{keyword}} -- {{$route.query.k}}</h1>
</template>

<script>
export default {
  name: "Search",
  props: ['keyword']
}
</script>

<style scoped>

</style>