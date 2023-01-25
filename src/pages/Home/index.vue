<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="f in floors" :key="f.id" :data="f"/>
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
import {mapState} from "vuex";

export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted() {
    this.$store.dispatch('home/getFloorList');
  },
  computed: {
    ...mapState({
      floors: state => state.home.floors
    })
  }
}
</script>