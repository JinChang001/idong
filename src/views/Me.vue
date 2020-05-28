<template>
  <div class="me">
    <!-- 用户头像开始 -->
    <div class="me-img">
      <img src="../../public/img/icon/user.png">
    </div>
    <!-- 用户头像结束 -->
    <!-- 登录/注册开始 -->
    <div class="lagin">
      <mt-button type="primary" class="button">登录</mt-button> 
      <mt-button type="primary" class="button">注册</mt-button>
    </div>
    <!-- 登录，注册结束 -->
    <!-- 横向功能区域开始 -->
    <ul class="shop">
      <router-link to="">
        <li>
          <img src="../../public/img/icon/kechengguanli.png">
          <P>我的课程</P>
        </li>
      </router-link>   
      <router-link to="">
        <li>
          <img src="../../public/img/icon/daka.png">
          <p>打卡-签到</p>
        </li>
      </router-link>
      <router-link to="">
        <li>
          <img src="../../public/img/icon/liulanjilu.png">
          <p>浏览历史</p>
        </li>
      </router-link>
      <router-link to="">
        <li>
          <img src="../../public/img/icon/jihua.png">
          <p>计划</p>
        </li>
      </router-link>
    </ul>
    <!-- 横向功能区域结束 -->
    <!-- 功能列表开始 -->
    <div class="cell">
      <mt-cell title="我的收藏" isLink to="">
        <img src="../../public/img/icon/sc.png"  slot="icon">
      </mt-cell>
      <mt-cell title="个人信息" isLink to="">
        <img src="../../public/img/icon/person.png"  slot="icon">
      </mt-cell>
      <mt-cell title="饮食指南" isLink to="" >
        <img src="../../public/img/icon/foot.png"  slot="icon">
      </mt-cell>
    </div>
    <!-- 功能列表结束 -->
  </div>
</template>
<style  scoped>

  *{margin:0;padding:0}
  .me{
    position: relative;
  }
  /* 用户头像 */
  .me .me-img>img{
    position:absolute;
    top:70px;
    left:160px;
    height:100px;
  }
  /* 登录与注册 */
  .me .lagin{
    position:absolute;
    top:180px;
    left:130px;
    margin-right:20px;
  }
  /* 登录与注册按钮 */
  .lagin .button{
    height:31px;
    width:80px;
    border-radius:10px;
    margin-right:6px;
  }
  /* 横向功能区域样式 */
  .shop{
    position: relative;
    display: flex;
    width:367px;
    top:260px;
    left:18px;
    text-align: center;
    
    
  }
  .shop li{
    margin:0 15px;
    font-size:16px;
    font-weight:700; 
  }
  .shop li img{
    height: 40px;
    margin: 20px 0px;
  }
  /* cell功能列表样式 */
  .me>.cell{
    display:block;
    margin-top:330px;
  }
 
</style>



