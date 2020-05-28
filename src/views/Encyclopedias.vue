
<template>
<!-- Encyclopedias.vue -->
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="" fixed>
        <div slot="left" class="shortcut">
           百科1111
        </div>
    </mt-header>

    <!-- 顶部选项卡开始 -->
    <!-- <mt-navbar v-model="active">
      <mt-tab-item id="1">HTML</mt-tab-item>
      <mt-tab-item id="2">CSS</mt-tab-item>
      <mt-tab-item id="3">JavaScript</mt-tab-item>
    </mt-navbar>  -->
    
    <div class="Ency_2">
      <!-- 上方图片 -->
      <div class="headImg">
        <img   src="../assets\images\encyImg/test.jpg" alt="" >
      </div>
      <div class="main">
          <!-- 侧边选项卡开始 -->
          <van-sidebar v-model="encyActive" class="Le">
                  <van-sidebar-item v-for="(v,k) of ET"  :key="k" :title="v.Tname"   @click="ao"  ></van-sidebar-item>
          </van-sidebar>
          

          <!-- 面板区域开始 -->
          <van-panel   class="Ri" :id="v.Tid" v-for="(v,k) of ET" :key="k" style="display:none;" data-vp="v.enName" >
                  <!-- 单一文章信息开始 -->
                      <!-- 文章图文信息开始 -->
                        <mt-cell title="瘦腿" label="82.3万人关注 · 2580条内容" class="articleItem " is-link  v-for="(v,k) of 5" :key="k">
                            <mt-badge type="error" size="small" >热</mt-badge>
                            <img src="../assets\images\encyImg/test02.jpg" slot="icon" width="50" height="50" >
                        </mt-cell>
                      <!-- 文章图文信息结束 -->
                  <!-- 单一文章信息结束 -->
          </van-panel>
          <!-- 面板区域结束 -->
          
      </div>
    </div>
 
    <!-- 底部选项卡开始 -->
    <mt-tabbar v-model="selectedTab" fixed>
      <mt-tab-item id="home">
        <img src="../assets\images\encyImg/home_enabled.png" slot="icon" v-if="selectedTab == 'home'">

        <img src="../assets\images\encyImg/home_disabled.png" slot="icon" v-else>
        首页
      </mt-tab-item>
      <mt-tab-item id="ency">
        <img src="../assets\images\encyImg/ency_enabled.png" slot="icon"  v-if="selectedTab == 'ency'">
        <img src="../assets\images\encyImg/ency_disabled.png" slot="icon" v-else>
        百科
      </mt-tab-item>
      <mt-tab-item id="release">
        <img src="../assets\images\encyImg/release_enabled.png" slot="icon"  v-if="selectedTab == 'release'">
        <img src="../assets\images\encyImg/release_disabled.png" slot="icon" v-else>
        
      </mt-tab-item>
      <mt-tab-item id="lightning">
        <img src="../assets\images\encyImg/lightning_enabled.png" slot="icon"  v-if="selectedTab == 'lightning'">
        <img src="../assets\images\encyImg/lightning_disabled.png" slot="icon" v-else>
        运动
      </mt-tab-item>
      <mt-tab-item id="me">
        <img src="../assets\images\encyImg/me_enabled.png" slot="icon"  v-if="selectedTab == 'me'">
        <img src="../assets\images\encyImg/me_disabled.png" slot="icon" v-else>
        我
        </mt-tab-item>
    </mt-tabbar>    

  </div>
</template>
<style>
html,body{
    touch-action: pan-y;
}
</style>
<style scoped>
.Ency_2{
  overflow: hidden;
  margin-top: 40px;
  /* display: flex; */
}
.shortcut{
  margin-left:5px;
  color:#fff;
  font-size: 24px;
}
.headImg{
  /* position: fixed; */
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.main{
  margin-bottom: 55px;
}
.Le{
    width: 25%;
    /* padding: 15px 0; */
    /* margin:0 10px; */
    /* background-color: #D8D8D8; */
    /* border:1px solid #999; */
    /* position: fixed; */
    font-size: 16px;
    text-align: center;
    float: left;
    margin-bottom: 55px;
    
}
.Ri{
    width: 70% ;
    float: right;
}
.articleItem{
  padding:5px 0;
  margin:0 3px;
  border-bottom:1px solid rgb(162, 163, 161);
}
.articleItem-header{
  font-weight: 600;
  font-size: 17px;
  color: #1a1a1a;
  line-height: 22px;
}
.articleItem-wrapper{
  display: flex;
  align-items: center;
  padding-top: 10px;
  width:100%;
}
.articleImg{
  margin-right:15px;
}
.articleImg img{
  width: 50px;
  height: 50px;
  border-radius: 5px;
}
.articleDes{
  height: 50px;
  font-size: 15px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  line-height: 21px;
  letter-spacing: normal;
  color: #444;
}
</style>


<script>
export default {
  data(){
    return {
      //默认的顶部选项卡及面板
      active:'2',
      //默认的底部选项卡
      selectedTab:'ency',
      encyActive:'0',
      ET:[
            {Tid:"1",Tname:"关注"},
            {Tid:"2",Tname:"推荐"},
            {Tid:"3",Tname:"饮食"},
            {Tid:"4",Tname:"减肥"},
            {Tid:"5",Tname:"增肌"}
        ],
      enName:[
        'Focus',
        'abc'
      ],
      enName2:[
        'Focus',
        'abc',
        'abc'
      ]
      // dp:"display:none;"
    }
  },
  methods:{
    ao(e){
      // this.dp="display:none;"
      var xxs=document.querySelectorAll("[data-vp]")
      for(var xx of xxs){
        xx.style.display="none";
      }
      document.getElementById(e+1).style=""
      // console.log(document.querySelectorAll("[data-vp]"))
    }
  }
}
</script>