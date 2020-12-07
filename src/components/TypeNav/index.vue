<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container" @mouseleave="isSearchShow = false">
      <h2 class="all" @mouseenter="isSearchShow = true">全部商品分类</h2>
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
      <transition name="search">
        <div class="sort" v-show="isHomeShow || isSearchShow">
          <div class="all-sort-list2" @click="goSearch">
            <div class="item bo" v-for="category in categoryList" :key="category.categoryId">
              <h3>
                <!-- 一级分类名称 -->
                <!-- 方法一：router-link 产生太多组件，性能差，不建议使用-->
                <!-- <router-link
                :to="`/search?categoryName=${category.categoryName}&category1Id=${category.categoryId}`"
                >{{category.categoryName}}</router-link>-->
                <!-- 方法二：编程式导航 -->
                <!-- <a
                @click.prevent="$router.push({
                  name:'search',
                  query:{
                    categoryName:category.categoryName,
                    category1Id:category.categoryId,
                  }
                })"
                >{{category.categoryName}}</a>-->
                <!-- 方法三：事件委托 -->
                <a
                  :data-categoryName="category.categoryName"
                  :data-categoryId="category.categoryId"
                  :data-categoryType="1"
                >{{category.categoryName}}</a>
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl class="fore" v-for="child in category.categoryChild" :key="child.categoryId">
                    <dt>
                      <!-- 二级分类名称 -->
                      <!-- <a
                      @click.prevent="$router.push({
                        name:'search',
                        query:{
                          categoryName:child.categoryName,
                          category2Id:child.categoryId,
                        }
                      })"
                      >{{child.categoryName}}</a>-->
                      <a
                        :data-categoryName="child.categoryName"
                        :data-categoryId="child.categoryId"
                        :data-categoryType="2"
                      >{{child.categoryName}}</a>
                    </dt>
                    <dd>
                      <em v-for="grandChild in child.categoryChild" :key="grandChild.categoryId">
                        <!-- 三级分类名称 -->
                        <!-- <a
                        @click.prevent="$router.push({
                          name:'search',
                          query:{
                            categoryName:grandChild.categoryName,
                            category3Id:grandChild.categoryId,
                          }
                        })"
                        >{{grandChild.categoryName}}</a>-->
                        <a
                          :data-categoryName="grandChild.categoryName"
                          :data-categoryId="grandChild.categoryId"
                          :data-categoryType="3"
                        >{{grandChild.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TypeNav",
  // data() {
  //   return {
  //     //初始化响应数据
  //     categoryList: [],
  //   };
  // },
  data() {
    return {
      isHomeShow: this.$route.path === "/",
      isSearchShow: false,
    };
  },
  computed: {
    // ...mapState(["categoryList"]),
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    ...mapActions(["getCategoryList"]),
    goSearch(e) {
      const { categoryname, categoryid, categorytype } = e.target.dataset; //元素自定义属性对象

      if (!categoryname) return;

      const location = {
        name: "search",
        query: {
          categoryName: categoryname,
          [`category${categorytype}Id`]: categoryid,
        },
      };

      const { searchText } = this.$route.params;
      if (searchText) {
        location.params = { searchText };
      }

      this.$router.push(location);
      this.isSearchShow = false;
    },
  },
  // async mounted() {
  //   const result = await reqGetBaseCategoryList();
  //   this.categoryList = result.slice(0, 15);
  // },
  mounted() {
    if (this.categoryList.length) return;

    this.getCategoryList();
  },
};
</script>

<style  lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

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
      position: absolute;
      background: #fafafa;
      z-index: 999;

      // 三级导航过渡效果
      &.search-enter-active {
        transition: height 0.5s;
        overflow: hidden;
      }
      &.search-enter {
        height: 0;
      }
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
            _height: 200px;
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
