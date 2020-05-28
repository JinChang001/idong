<template>
  <div class="home">
    <!-- 标题 -->
    <mt-cell title="运动" class="title1"></mt-cell>
    <!-- 导航栏 -->
    <mt-navbar class="navbar" v-model="active">
      <mt-tab-item id="1">活动</mt-tab-item>
      <mt-tab-item id="2">训练</mt-tab-item>
      <mt-tab-item id="3">少女背</mt-tab-item>
      <mt-tab-item id="4">跑步</mt-tab-item>
      <mt-tab-item id="5">瑜伽</mt-tab-item>
    </mt-navbar>

    <!-- details -->
    <div class="details">
      <div class="details-index">我的课程库</div>
      <span class="add">十</span>
    </div>
    <!-- 详情页开始模块 -->
    <div class="content">
      <mt-cell title="我学过的课程" label="9个视频" isLink>
        <img class="content-img" src="../../src/assets/images/sport/1.jpg" slot="icon" />
      </mt-cell>
    </div>
    <div class="content">
      <mt-cell title="我学过的课程" label="9个视频" isLink>
        <img class="content-img" src="../../src/assets/images/sport/12.jpg" slot="icon" />
      </mt-cell>
    </div>
    <!-- 详情页结束模块 -->
    <!-- 推荐计划开始 -->
    <mt-cell class="module" title="推荐计划" isLink></mt-cell>
    <!-- 推荐计划结束 -->
    <!-- 轮播图片 -->
    <div class="swipe">
      <mt-swipe @change="handleChange" :show-indicators="false">
        <mt-swipe-item>导航一</mt-swipe-item>
        <mt-swipe-item>导航二</mt-swipe-item>
        <mt-swipe-item>导航三</mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 轮播图片结束 -->
    <!-- 动作训练开始 -->
    <mt-cell title="动作训练" isLink></mt-cell>
    <!-- 动作训练结束 -->
    <!-- 轮播图片 -->
    <div class="swipe2">
      <div class="swipe-module"></div>
      <div class="swipe-module"></div>
      <div class="swipe-module"></div>
    </div>
    <!-- 轮播图片结束 -->
    <!-- 底部导航栏开始 -->
     <!-- <mt-tabbar  v-model="navBottom" fixed>
       <mt-tab-item id="d1">首页
         <img src="../../src/assets/images/sport/shouye.png" slot="icon">
       </mt-tab-item>
       <mt-tab-item id="d2">计划
         <img src="../../src/assets/images/sport/jihua.png" slot="icon">
       </mt-tab-item>
       <mt-tab-item id="d3">运动
         <img src="../../src/assets/images/sport/shandian.png" slot="icon">
       </mt-tab-item>
       <mt-tab-item id="d4">商城
         <img src="../../src/assets/images/sport/shangcheng_1.png" slot="icon">
       </mt-tab-item>
       <mt-tab-item id="d5">我
         <img src="../../src/assets/images/sport/wode.png" slot="icon">
       </mt-tab-item>
     </mt-tabbar> -->
    <!-- 底部导航栏结束 -->
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  data() {
    return {
      active: 1
    };
  },
  methods: {
    handleChange(index) {
      console.log(index);
    }
  }
};
</script>

<style scoped>
.navbar {
  padding: 0 !important;
}
/* 页头标题标签样式 */
.title1 {
  background-color: #ffffff;
  color: #000000;
  font-size: 6px;
  text-align: left;
  margin-left: 20px;
}
/* nav导航栏字体 */
.home >>> .mint-tab-item-label {
  font-size: 12px;
  font-weight: bold;
}
.details-index {
  width: 99.99%;
  height: 50px;
  margin-top: 5px;
  text-align: left;
  font-weight: bold;
  font-size: 16px;
  line-height: 50px;
  border-top: 3px solid #f7f7f7;
  border-bottom: 3px solid #f7f7f7;
}
.add {
  float: right;
  margin-top: -40px;
  margin-right: 30px;
}
.content {
  text-align: left !important;
  margin-top: 5px;
  border-bottom: 2px solid #f5f5f5;
}
.content >>> .mint-cell-label {
  display: block;
  text-align: center;
  margin-top: -30px;
  margin-left: -100px;
}
/* 详情图片 */
.content-img {
  width: 80px;
  height: 90px;
  margin-top: 10px;
  border-radius: 5px;
}
.module {
  margin-top: "18px";
  text-align: left;
  padding: 15px 10px;
}
.swipe {
  width: 100%;
  height: 200px;
  background-color: #abcdef;
  border-radius: 8px;
}
.swipe2 {
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
}
.swipe-module {
  width: 200px;
  height: 120px;
  background-color: pink;
  border-radius: 8px;
  margin-left:10px;
  margin-bottom: 70px;
}
</style>

