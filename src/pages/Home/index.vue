<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>

import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";

export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  }
}
</script>

<style scoped>

</style>