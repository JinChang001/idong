<template>
  <div class="abc">
    <!-- 按钮组 -->
    <div>
      <ul class="mian">
        <li v-for="(v,i) of thin" :key="i" class="mian1">
          <div>
            <img :src="v.p">
          </div>
          
        <p>{{v.w}}</p>
        </li>
      </ul>
    </div>
  <!-- 底部的× -->
  <div class="aa">
     <router-link to="/">
       <p>×1111</p>
     </router-link>
  </div>

  
  </div>
</template>

<script>
export default {
    data(){
      return{
        thin:[
          {w:"记饮食",
          p:require('../assets/images/pushcard/yinshi.png')
          },
          {w:"记运动",
          p:require('../assets/images/pushcard/yundong2.png')
          },
          {w:"记体重",
          p:require('../assets/images/pushcard/tizhong.png')
          },
          {w:"发动态",
          p:require('../assets/images/pushcard/iconset0239.png')
          },
          {w:"记围度",
          p:require('../assets/images/pushcard/pichi.png')
          },
          {w:"记经期",
          p:require('../assets/images/pushcard/hua.png')
          },
          {w:"每日打卡",
          p:require('../assets/images/pushcard/rili.png')
          }     
        ]
      };
    },
  
};
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
 ul li{
   width:90px ;
   height: 90px;
   list-style: none;
   /* border-radius:50% ; */
   /* background: rgb(247, 194, 212); */

 }
 ul li div{
   width:70px ;
   height: 70px;
   border-radius:50% ;
   background: rgb(247, 194, 212);
   overflow: hidden;
 }
 ul li img{
   width: 45px;
  margin: 12px auto 0;


   
 }
  ul li:first-child {
   margin-right:15px ;
   margin-bottom:10px ;

 }
 ul li+li {
   margin-right:15px ;
   margin-bottom:10px ;
 }
 .mian{
   display: flex;
  flex-wrap: wrap;
  position: absolute;
  bottom: 15%;

 }
 .mian1{
   width:20%
   
  
 }
 .aa{
    position: absolute;
  bottom: 4%;
  left: 176px;
 font-size: 40px;
 }
 a{
    text-decoration: none;
 }
</style>