<template>
  <div class="spec-preview">
    <img :src="imgObj.imgUrl" />
    <div class="event" @mousemove="zoomImg"></div>
    <div class="big">
      <img :src="imgObj.imgUrl" ref="bigImg"/>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  data() {
    return {
      currentIndex: 0
    }
  },
  props: ['imgList'],
  methods: {
    zoomImg(event) {
      let mask = this.$refs.mask;
      let bigImg = this.$refs.bigImg;
      let left = event.offsetX - mask.offsetWidth / 2;
      let top = event.offsetY - mask.offsetHeight / 2;

      // 处理临界值
      if (left <= 0) left = 0;
      if (left >= mask.offsetWidth) left = mask.offsetWidth;

      if (top <= 0) top = 0;
      if (top >= mask.offsetHeight) top = mask.offsetHeight;

      // 修改主图top&left 属性值
      mask.style.left = left + 'px';
      mask.style.top = top + 'px';
      // 修改放大图片的top&left 属性值
      bigImg.style.left = -2 * left + 'px';
      bigImg.style.top = -2 * top + 'px';
    }
  },
  computed: {
    imgObj() {
      return this.imgList[this.currentIndex] || {};
    }
  },
  mounted() {
    // 获取ImageList组件传递过来的当前图片的索引值
    this.$bus.$on('getIndex', (index) => {
      this.currentIndex = index;
    })
  }
}
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover~.mask,
  .event:hover~.big {
    display: block;
  }
}
</style>