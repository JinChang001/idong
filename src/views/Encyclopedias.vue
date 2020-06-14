
<template>
<!-- Encyclopedias.vue -->
  <div>
    <!-- 页面头部开始 -->
    <my-header name='百科' class="encytitle"></my-header>
    <!-- 页面头部结束 -->
    <div class="Ency_2">
      <!-- 页面上方图片 -->
      <div class="headImg">
        <img  src="../assets/images/encyImg/headImg.png" alt="" >
      </div>
      <div class="main">
          <!-- 侧边选项卡开始 -->
          <div class="Lebaba">
            <van-sidebar  v-model="encyActive" class="Le">
                    <van-sidebar-item v-for="(item,index) in category"  :key="index" :title="item.ency_category_name" @click="ao"></van-sidebar-item>
            </van-sidebar>
          </div>  
          
          <!-- 面板区域开始 -->
          <div class="Ribaba">
            <!-- <van-panel   class="Ri" :id="item.ency_category_id" v-for="(item,index) in category" :key="index" style="display:none;" data-vp > -->
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
                  <mt-cell  class="articleItem " is-link :to="`/EncyArticle/${article.article_id}`" v-for="(article,index) of articles" :key="index">
                      
                      <div>
                          <p class="linkTitle">{{article.article_title}}</p>
                          <p class="linkContent">82.3万人关注 · 2580条内容</p>
                        
                      </div>
                      <mt-badge type="error" size="small" >热</mt-badge>
                      <img v-lazy="article.article_image" slot="icon" width="50" height="50" >
                  </mt-cell>
                </div>
                <!-- 文章图文信息结束 -->
              <!-- 面板文章信息结束 -->
            <!-- </van-panel> -->
          </div>
          <!-- 面板区域结束 -->
          
      </div>
    </div>
    <!-- 底部选项卡开始 -->
    <!-- 封装组件 
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
/* html,body{ 
    touch-action: pan-y;
} */
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
  margin-top: 35px;
  /* display: flex; */
}
.encytitle{
  height: 35px;
  width: 100%;
  background-color: #fff;
  margin-top: 0;
  padding-top: 5px;
  position: fixed;
  top: 0;
  z-index: 1001;
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
  /* border-radius: 10px; */
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
  margin: 0;
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
      //存储所有的文章分类信息
      category:[],
      //存储特定分类下的文章信息
      articles:[],
      //存储当前的页码
      page:1,
      //当服务器在处理请求期间,既使再次滚动到滚动范围内不再
      //触发请求函数
      busy:false,
      //存储服务器返回的总页数
      pagecount:'',
      
      // ET:[
      //       {Tid:"1",Tname:"关注"},
      //       {Tid:"2",Tname:"推荐"},
      //       {Tid:"3",Tname:"饮食"},
      //       {Tid:"4",Tname:"减肥"},
      //       {Tid:"5",Tname:"增肌"},
      //       {Tid:"6",Tname:"增肌"},
      //       {Tid:"7",Tname:"增腿"},
      //       {Tid:"8",Tname:"增腿"},
      //       {Tid:"9",Tname:"增发"},
      //       {Tid:"10",Tname:"增发"}
      //   ],
      
      // dp:"display:none;"
    }
  },
  
  methods:{
    //左侧选项卡不能关联面板，使用点击事件更换面板显示
    ao(e){
      // this.dp="display:none;"
      // var xxs=document.querySelectorAll("[data-vp]")
      // for(var xx of xxs){
      //   xx.style.display="none";
      // }
      // document.getElementById(e+1).style=""
      // console.log(document.querySelectorAll("[data-vp]"))
      // console.log(e);
      this.articles =[];
      var active=e+1
      this.busy = true;
      this.axios.get('/getArticles?cid=' + active + '&page=' + this.page).then((res)=>{
            
            var data = res.data.articles;
            // console.log(data)
            //将WEB服务器返回的总页数赋值给pagecount变量
            this.pagecount = res.data.pagecount;

            data.forEach((item)=>{
              //因为ency_article数据表中的image字段允许为空
              //所以需要进行判断,如果不为空,才进行动态加载图像操作
              if(item.article_image != null){
                  item.article_image = require('../assets/images/encyImg/' + item.article_image);
              }
              //将WEB服务器返回的文章信息存储到articles数组中
              //在该数组的每个对象中包含:文章ID,标题,简介,动态加载的图像
              this.articles.push(item);
            });
            // 
            this.busy = false;
        });
    },
    loadData(){
      this.busy = true;
      //加载更多的数据,必须将页码及文章分类ID提交给服务器
      //文章ID参数用于决定服务器返回哪一种类型的文章
      //页码参数用于决定返回该类文章下的哪一部分的数据
      //URL地址栏参数的结构是: 
      //URL地址?参数名称=值&参数名称=值
      this.axios.get('/getArticles?cid=' + this.active + '&page=' + this.page).then((res)=>{
            
            var data = res.data.articles;
            // console.log(data)
            //将WEB服务器返回的总页数赋值给pagecount变量
            this.pagecount = res.data.pagecount;

            data.forEach((item)=>{
              //因为ency_article数据表中的image字段允许为空
              //所以需要进行判断,如果不为空,才进行动态加载图像操作
              if(item.article_image != null){
                  item.article_image = require('../assets/images/encyImg/' + item.article_image);
              }
              //将WEB服务器返回的文章信息存储到articles数组中
              //在该数组的每个对象中包含:文章ID,标题,简介,动态加载的图像
              this.articles.push(item);
            });
            // 
            this.busy = false;
        });
      // 
    },


  },
  mounted(){
    //默认选择推荐选项卡
    // document.getElementById(2).style=""

    //获取文章分类信息
    this.axios.get('/category').then((res)=>{
        //将WEB服务器返回的文章分类信息存储到Vue的变量中
        this.category = res.data.category;
        // console.log(res.data.category)
        
    });
    //获取默认选项卡的第一页包含的文章信息
    this.loadData();
  }
  
  
}
</script>