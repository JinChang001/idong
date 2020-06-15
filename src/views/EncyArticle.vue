<template>
    <div class="encyArticle">
        <!-- 顶部导航开始 -->
        <mt-header title="百科详情页" class="ency-article" fixed>
            <router-link to="/encyclopedias" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <!-- 文章区域开始 -->
        <div class="main">
            <!-- 文章标题开始 -->
            <div class="encyArticle-header">
                <div class="encyArticle-header-title">
                    {{obj.article_title}}
                    <!-- 这里是&lt;文章标题&gt; -->
                    
                </div>
                <div class="encyArticle-header-datetime">
                    {{moment.unix(obj.article_at).format('Y年MM月DD日HH:mm')}}
                    <!-- 这里是&lt;发布日期&gt; -->
                </div>
                <div class="encyArticle-header-focus" @click="onfocus">
                    <mt-button  size="small"  v-if="isfocus">
                        <img src="../assets/images/encyImg/Focus_disable.png" slot="icon" alt="">
                        收藏
                    </mt-button>
                    <mt-button  size="small" v-else>
                        <img src="../assets/images/encyImg/Focus_enabled.png" slot="icon" alt="">
                        取消收藏
                    </mt-button>
                </div>
            </div>
            <!-- 文章标题结束 -->
            <!-- 作者信息开始 -->
            <!-- <div class="author-info">
                <div class="author-info-avatar">
                    <img :src="obj.avatar" alt="">
                    头像
                </div>
                <div class="author-info-detail">
                    <div class="author-info-nickname">
                        {{obj.nickname}}
                        这里是&lt;作者姓名&gt;
                        
                    </div>
                    <div>
                        共
                        <mt-badge size="small" type="error">
                            {{obj.article_number}}
                            这里是&lt;文章数量&gt;
                        </mt-badge>
                        篇
                    </div>
                </div>
            </div> -->
            <!-- 作者信息结束 -->
            <!-- 文章正文开始 -->
            <div class="encyArticle-content" v-html="obj.article_content">
                
            </div>
            <!-- 文章正文结束 -->
        </div>
        <!-- 文章区域结束 -->


    </div>
</template>
<style scoped>
.ency-article{
    color: #000;
    background-color: #fff;
}
.main{
    margin-top: 40px;
    margin-bottom: 60px;
}
.encyArticle{
    height:100vh;
}
.encyArticle-header{
    margin-bottom:5px;
    padding:10px;
    background-color:#fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    position: relative;
}
.encyArticle-header-title{
    font-size:18px;
    color:#1a1a1a;
    line-height: 1.5;
}
.encyArticle-header-datetime{
    margin-top:5px;
    font-size:14px;
    color:#646464;
}
.encyArticle-header-focus{
    position: absolute;
    right: 10px;
    top: 15px;
}
.encyArticle-header-focus button{
    background-color: #fff;
}
.encyArticle-header-focus img{
    width: 20px;
}
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
.encyArticle-content{
    margin-top:5px;
    padding:10px;
    background-color:#fff;
    line-height: 1.7;
}
.encyArticle-content p{
    padding:5px 0;
}
</style>
<style>
.encyArticle-content img{
    max-width:100%;
}

</style>
<script>
export default {
  data(){
    return {
        //存储获取到的文章标题、正文及相关的信息
        obj:{},
        isfocus:true,
    }
  },
  methods:{
      onfocus(){
           this.isfocus == true ? this.isfocus = false : this.isfocus = true;
      }
  },
  //在挂载完成后执行的业务代码
  mounted(){
    //请求WEB服务器中以当前地址栏ID为条件的文章标题、正文及相关信息
    var id = this.$route.params.id;
    var readC = ""
    //   console.log(id)
    //发送AJAX请求
    this.axios.get('/encyArticle?id=' + id).then((res)=>{
    this.obj = res.data.encyArticle;
    // console.log(this.obj)
    readC = this.obj.read_count
    
    // this.obj.avatar = require('../assets/images/encyImg/' + this.obj.avatar);
    });
    //   console.log(this.obj)
    
    
  },
  updated(){
    //   let timer=setTimeout(function(){
    // var read_count=this.obj.read_count
    var id = this.$route.params.id;
        //发送AJAX请求
    var readC = this.obj.read_count
    readC++
    this.axios.post('/setRead?read_count=' + readC + '&id=' + id).then((res)=>{
       
    });
    // },3000);
  }
}
</script>


