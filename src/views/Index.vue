<template>
  <div>
    <!-- 顶部标题开始 -->
    <!-- <div class="index-title">
      <span class="index-title-content">首页</span>
    </div> -->
    <my-header></my-header>
    <!-- 顶部标题结束 -->
    
    <!-- 顶部选项卡开始 -->
    <mt-navbar class="navbar" v-model="active">
      <mt-tab-item id="1">运动圈</mt-tab-item>
      <mt-tab-item id="2">好友圈</mt-tab-item>
    </mt-navbar>
    <!-- 顶部选项卡结束 -->
    <!-- 面板区域开始 -->
    <div class="main">
      <mt-tab-container v-model="active" swipeable>
        <mt-tab-container-item id="1">
          <!-- 轮播图开始 -->
          <mt-swipe class="main-lunbo">
            <mt-swipe-item>
              <img src="../assets/images/index/lunbo1.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/images/index/lunbo2.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
              <img src="../assets/images/index/lunbo3.jpg" alt="">
            </mt-swipe-item>
          </mt-swipe>
          <!-- 轮播图结束 -->
          <!-- 运动圈内容开始 -->
          <div class="ydq">
            <!-- 运动圈标题开始 -->
            <div class="ydq-title">运动圈</div>
            <!-- 运动圈标题结束 -->
            <!-- 用户动态开始 -->
            <ul class="ydq-items">
              <!-- 一条用户动态开始 -->
              <li class="ydq-item"  v-for="(v,k) in 10" :key="k">
                <!-- 用户信息开始 -->
                <router-link to="/">
                  <div class="author-info">
                      <div class="author-info-avatar">
                          <img src="../assets/images/index/avatar/01beb05dd34dfea8012129e23e4dc8.jpg" alt="">
                      </div>
                      <div class="author-info-detail">
                          <div class="author-info-nickname">爱吃猫的鱼</div>
                      </div>
                  </div>
                </router-link>
                <!-- 用户信息结束 -->
                <!-- 用户动态信息开始 -->
                <router-link to="/">
                  <!-- 动态的文本信息 -->
                  <div class="ydq-item-text">
                    关于空腹跑🏃‍♀️
这三个月的跑步我基本都是早上空腹跑，减脂效果对我来说真的很明显，和大家分享下小经验。😳

空腹跑为什么减脂效果比较好，因为空腹时体内血糖含量较低，跑步动用的脂肪供能的比例增大，从而可以消耗更多的脂肪。所以减脂可以选择空腹跑。✅

但是空腹跑并不是适合所有人
❎有低血糖的人不建议空腹跑
❎没有运动基础的也不建议空腹跑
❎上年纪的人不建议空腹跑哦
                  </div>
                  <!-- 动态图片 -->
                  <div class="ydq-item-img">
                    <img src="../assets/images/index/userNote/732a8d18b791a4265e338cb9d20f9c3df20d6a87_1241x932.jpg" alt="">
                  </div>
                  <!-- 动态的点赞和留言 -->
                  <div class="ydq-item-opt"></div>
                </router-link>
                <!-- 用户动态信息结束 -->
              </li>
              <!-- 一条用户动态结束 -->
            </ul>
            <!-- 用户动态结束 -->
          </div>
          <!-- 运动圈内容结束 -->
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          请先添加好友哟~
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 面板区域结束 -->
  </div>
</template>
<style scoped>
.navbar{
  margin-top: -15px;
}
/* 顶部标题样式开始 */
.index-title{
  height: 30px;
  margin-top: 5px;
}
.index-title span{
  line-height: 30px;
  font-size: 1.3rem;
  color: #777;
  font-weight: normal;
  margin-left: 10px;
}
/* 顶部标题样式结束 */
/* 顶部选项卡样式开始 */
/* 顶部选项卡样式结束 */
.main-lunbo{
  width: 95%;
  height: 160px;
  margin: 5px auto;
}
.main-lunbo img{
  width: 100%;
  height: 150px;
  border-radius: 5px;
}
/* 用户信息样式开始 */
.author-info{
    display: flex;
    align-items: center;
    background-color:#fff;
    padding:10px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
}
.author-info-avatar{
    margin-right:10px;
}
.author-info-avatar img{
    width:40px;
    height: 40px;
    border-radius: 100%;
}
.author-info-detail{
    font-size:14px;
}
.author-info-nickname{
    margin-bottom:5px;
}
/* 用户信息样式结束 */
/* 动态文本信息开始 */
.ydq-item-text{
  margin-top:5px;
  padding:10px;
  background-color:#fff;
  line-height: 1.7;
}
/* 动态文本信息结束 */
/* 动态图片开始 */
.ydq-item-img>img{
  width: 95%;
  border-radius: 5px;
}
/* 动态图片结束 */
</style>

<script>
export default {
  data(){
    return {
      active:'1'
    }
  },
  methods:{
  }
}
</script>