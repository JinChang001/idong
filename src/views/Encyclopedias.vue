
<template>
<!-- Encyclopedias.vue -->
  <div>
    <!-- 页面头部 -->
    <div class="index-title">
      <span class="index-title-content">百科</span>
    </div>

    <div class="Ency_2">
      <!-- 页面上方图片 -->
      <div class="headImg">
        <img  src="../assets/images/encyImg/headImg.png" alt="" >
      </div>
      <div class="main">
          <!-- 侧边选项卡开始 -->
          <div class="Lebaba">
            <van-sidebar v-model="encyActive" class="Le">
                    <van-sidebar-item v-for="(v,k) of ET"  :key="k" :title="v.Tname"   @click="ao"  ></van-sidebar-item>
            </van-sidebar>
          </div>  
          <!-- aahahwdhalkw -->
          <!-- 测试上传 -->
          <!-- aahahwdhalkw -->
          <!-- 的空大武当里awd 无间傀儡 -->
          <!-- 大王卡来得及埃里克 -->
          <!-- 面板区域开始 -->
          <div class="Ribaba">
            <van-panel   class="Ri" :id="v.Tid" v-for="(v,k) of ET" :key="k" style="display:none;" data-vp >
              <p class="RiTitle">热门推荐</p>
              
                  <!-- 面板文章信息开始 -->
                      <!-- 文章图文信息开始 -->
                      
                      <div class="encyLinkbaba">
                        <!--<div class="encyLink" v-for="(v,k) of 20" :key="k">
                            <a href="#">
                              <img  src="../assets\images\encyImg/test02.jpg" alt="">
                              <div>
                                <p class="linkTitle">瘦腿</p>
                                <p class="linkContent">82.3万人关注 · 2580条内容</p>
                              
                              </div>
                            </a>
                        </div> -->
                        <mt-cell  class="articleItem " is-link to="/EncyArticle" v-for="(v,k) of 10" :key="k">
                            
                            <div>
                                <p class="linkTitle">瘦腿</p>
                                <p class="linkContent">82.3万人关注 · 2580条内容</p>
                              
                            </div>
                            <mt-badge type="error" size="small" >热</mt-badge>
                            <img src="../assets\images\encyImg/test02.jpg" slot="icon" width="50" height="50" >
                        </mt-cell>
                      </div>
                      <!-- 文章图文信息结束 -->
                  <!-- 面板文章信息结束 -->
            </van-panel>
          </div>
          <!-- 面板区域结束 -->
          
      </div>
    </div>
    <!-- 底部选项卡开始 -->
    <!-- 封装 
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
    -->
  </div>
</template>
<style>
html,body{ 
    touch-action: pan-y;
}
</style>
<style scoped>
.index-title{
  
  height: 30px;
  margin-top: 5px;
  
}
.index-title span{
  width: 100%;
  line-height: 30px;
  font-size: 1.3rem;
  color: #777;
  font-weight: normal;
  margin-left: 10px;
  position: fixed;
  background-color: #fff;
  z-index: 1000;
}
.Ency_2{
  overflow: hidden;
  margin-top: 0px;
  /* display: flex; */
}
.shortcut{
  margin-left:5px;
  color:#fff;
  font-size: 24px;
}
.headImg{
  position: fixed;
  width: 100%;
  /* border: 3px solid red; */
  border-radius: 10px;
  display: flex;
  /* justify-content: center; */
  overflow: hidden;
  background-color: #fff;
  z-index: 100;
  padding-top: 5px;
  padding-bottom: 5px;
  /* background: url('../assets/images/encyImg/test.jpg'); */
  /* background-attachment: fixed; */
}
.headImg>img{
  width: 95%;
  margin: 0 auto;
  
}

.main{
  width: 100%;
  margin-top: 90px;
  margin-bottom: 55px;
  

}
.Lebaba{
  width: 25%;
  overflow: scroll;
  /* float: left; */
  /* margin-bottom: 55px; */
  position: fixed;
}
.Le{
    /* width: 25%; */
    /* padding: 15px 0; */
    /* margin:0 10px; */
    /* background-color: #D8D8D8; */
    /* border:1px solid #999; */
    /* position: fixed; */
    font-size: 16px;
    text-align: center;
}

.Ri>div{
  padding: 0 ;
}

.Ribaba{
  width: 75% ;
  float: right;
  padding-bottom: 55px;
  /* margin-bottom: 55px; */
}
.RiTitle{
  width: 100%;
  height: 30px;
  vertical-align:middle;
  position: fixed;
  /* background-color: #fff; */
  color: #747474;
  font-size: 13px;
  background-color: #fff;
  line-height: 30px;
  padding-left: 5px;
  z-index: 100;
}

.encyLinkbaba{
  padding-top: 27px;
}
.linkTitle{
  font-size: 16px;
  margin-bottom: 5px;
}
.linkContent{
  font-size: 12px;
}
.articleItem{
  padding:5px 0;
  /* margin:0 3px; */
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
      // selectedTab:'ency',
      encyActive:'1',
      encyPanel:'1',
      ET:[
            {Tid:"1",Tname:"关注"},
            {Tid:"2",Tname:"推荐"},
            {Tid:"3",Tname:"饮食"},
            {Tid:"4",Tname:"减肥"},
            {Tid:"5",Tname:"增肌"},
            {Tid:"6",Tname:"增肌"},
            {Tid:"7",Tname:"增腿"},
            {Tid:"8",Tname:"增腿"},
            {Tid:"9",Tname:"增发"},
            {Tid:"10",Tname:"增发"}
        ],
      
      // dp:"display:none;"
    }
  },
  methods:{
    //左侧选项卡点击事件
    ao(e){
      // this.dp="display:none;"
      var xxs=document.querySelectorAll("[data-vp]")
      for(var xx of xxs){
        xx.style.display="none";
      }
      document.getElementById(e+1).style=""
      // console.log(document.querySelectorAll("[data-vp]"))
    }
  },
  mounted(){
    document.getElementById(2).style=""
  }
}
</script>