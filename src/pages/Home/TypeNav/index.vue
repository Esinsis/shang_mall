<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="mouseLeave" @mouseenter="changeShow">
        <h2 class="all">全部商品分类</h2>
        <div class="sort" v-show="show">
          <div class="all-sort-list2" @click="goSearch">
            <div class="item"
                 v-for="(category, index) in categories"
                 :key="category.categoryId"
                 :class="{cur:currentIndex === index}">

              <h3 @mouseenter="changeIndex(index)">
                <a href="javascript:;"
                   :data-categoryName="category.categoryName"
                   :data-category1Id="category.categoryId">
                  {{ category.categoryName }}
                </a>
              </h3>
              <div class="item-list clearfix">
                <div class="subitem" v-for="cc in category.categoryChild" :key="cc.categoryId">
                  <dl class="fore">
                    <dt>
                      <a href="javascript:;"
                         :data-categoryName="cc.categoryName"
                         :data-category2Id="cc.categoryId">
                        {{ cc.categoryName }}
                      </a>
                    </dt>
                    <dd>
                      <em v-for="ccc in cc.categoryChild" :key="ccc.categoryId">
                        <a href="javascript:;"
                           :data-categoryName="ccc.categoryName"
                           :data-category3Id="ccc.categoryId">
                          {{ ccc.categoryName }}
                        </a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import {throttle} from 'lodash'

export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      show: true
    }
  },
  mounted() {
    if (this.$route.path !== '/home'){
      this.show = false
    }
  },

  computed: {
    ...mapState({
      // 右侧需要一个函数，当使用这个计算属性的时候，右侧函数会被调用
      categories: state => state.home.categories
    })
  },
  methods: {
    changeIndex: throttle(function (index) {
      this.currentIndex = index
    }, 50),
    mouseLeave() {
      this.currentIndex = -1
      if (this.$route.path !== '/home'){
        this.show = false
      }
    },
    changeShow(){
      if (this.$route.path !== '/home'){
        this.show = true
      }
    },
    goSearch(event) {
      let element = event.target
      let {categoryname, category1id, category2id, category3id} = element.dataset
      const location = {name: 'search'}
      const query = {}
      if (categoryname) {
        query.categoryName = categoryname
        if (category1id) {
          query.category1Id = category1id
        } else if (category2id) {
          query.category2Id = category2id
        } else {
          query.category3Id = category3id
        }
      }
      location.query = query
      if (this.$route.params){
        location.params = this.$route.params
      }
      this.$router.push(location)
    }
  }
}
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .cur {
    background-color: skyblue;
  }

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>