<style scoped>
.navbar{
  margin-top: -15px;
}
.main{
  margin-bottom: 55px;
}
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

/* 动态图片结束 */

.user-info {
  padding: 10px;
}
.user-info>img{
  height:40px;
  width: 40px;
  border-radius: 50%;
}
.user-info>span {
  margin-left:10px;
}
.btn-follow{
  float: right;
}
.user-text{
  padding: 0px 10px;
  letter-spacing: 2px;
}
.user-imgs {
  padding: 5px;
}
.user-imgs img {
  width: 33.3333333%;
  height: 100px;
  padding: 5px;
  box-sizing:border-box;
}
.user-icons>li{
  width: 33%;
  line-height: 40px;
  border-bottom: 1px solid #eee;
  box-sizing:border-box;
  float: left;
  text-align: center;
}
.user-icons>li>img {
  width: 20px;
  height: 20px;
  padding-bottom: 8px;
}

</style>
<template>
  <div>
    <!-- 顶部标题开始 -->
    <my-header name="首页"></my-header>
    <!-- 顶部标题结束 -->
    
    <!-- 顶部选项卡开始 -->
    <mt-navbar class="navbar" v-model="active">
      <mt-tab-item id="1">运动圈</mt-tab-item>
      <mt-tab-item id="2">好友圈</mt-tab-item>
    </mt-navbar>
    <!-- 顶部选项卡结束 -->
    <!-- 面板区域开始 -->
    <div class="main">
      <mt-tab-container v-model="active">
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
            <ul class="moments-list">
              <li>
                <div class="user-info">
                  <img src="../assets/images/index/avatar/b86fd6fe4ac391ef9640f708126be782.jpg" alt="">
                  <span>靳昌</span>
                  <div class="btn-follow" @click="onFollowed">
                    <mt-button type="primary" size="small" v-if="isFollowed">关注</mt-button>
                    <mt-button type="default" size="small" v-else>取消关注</mt-button>
                  </div>
                </div>
                <div class="user-text" @click="pagePath('pdetails',queryData)">
                  关于空腹跑🏃‍♀️
                  这三个月的跑步我基本都是早上空腹跑，减脂效果对我来说真的很明显，和大家分享下小经验。😳
                  空腹跑为什么减脂效果比较好，因为空腹时体内血糖含量较低，跑步动用的脂肪供能的比例增大，从而可以消耗更多的脂肪。所以减脂可以选择空腹跑。✅
                  但是空腹跑并不是适合所有人
                  ❎有低血糖的人不建议空腹跑
                  ❎没有运动基础的也不建议空腹跑
                  ❎上年纪的人不建议空腹跑哦
                </div>
                <div class="user-imgs" @click="pagePath('pdetails',queryData)">
                  <img src="../assets/images/index/userNote/732a8d18b791a4265e338cb9d20f9c3df20d6a87_1241x932.jpg" alt="">
                  <img src="../assets/images/index/userNote/732a8d18b791a4265e338cb9d20f9c3df20d6a87_1241x932.jpg" alt="">
                  <img src="../assets/images/index/userNote/732a8d18b791a4265e338cb9d20f9c3df20d6a87_1241x932.jpg" alt="">
                  <img src="../assets/images/index/userNote/732a8d18b791a4265e338cb9d20f9c3df20d6a87_1241x932.jpg" alt="">
                  <img src="../assets/images/index/userNote/732a8d18b791a4265e338cb9d20f9c3df20d6a87_1241x932.jpg" alt="">
                  <img src="../assets/images/index/userNote/732a8d18b791a4265e338cb9d20f9c3df20d6a87_1241x932.jpg" alt="">
                  <img src="../assets/images/index/userNote/732a8d18b791a4265e338cb9d20f9c3df20d6a87_1241x932.jpg" alt="">
                  <img src="../assets/images/index/userNote/732a8d18b791a4265e338cb9d20f9c3df20d6a87_1241x932.jpg" alt="">
                  <img src="../assets/images/index/userNote/732a8d18b791a4265e338cb9d20f9c3df20d6a87_1241x932.jpg" alt="">
                </div>
                <ul class="user-icons">
                  <li>
                    <img src="../assets/images/index/icons/like.png" alt="">
                    <span>123</span>
                  </li>
                  <li @click="pagePath('pdetails',queryData)">
                    <img src="../assets/images/index/icons/review.png" alt="">
                    <span>123</span>
                  </li>
                  <li @click="onCollect">
                    <img id="collectImg" src="../assets/images/index/icons/collect.png" alt="" v-if="isCollected == 0">
                    <img id="collectImg" src="../assets/images/index/icons/collected.png" alt="" v-else-if="isCollected == 1">
                  </li>
                </ul>
              </li>
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

<script>
export default {
  data(){
    return {
      active:'1',
      queryData: {
        user_id: 1001
      },
      isCollected: false,
      isFollowed: false
    }
  },
  created() {
    console.log(this.$route)
  },
  methods:{
    pagePath(url, data, type){
      this.$router.push({name: url, [type]: data})
    },
    onCollect(){
      this.isCollected == true ? this.isCollected = false : this.isCollected = true;
    },
    onFollowed(){
      this.isFollowed == true ? this.isFollowed = false : this.isFollowed = true;
    }
  }
}
</script>