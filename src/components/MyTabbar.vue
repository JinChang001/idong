<template>
  <div>
     <!-- 底部选项卡开始 -->
    <mt-tabbar v-model="selectedTab" fixed>
      <mt-tab-item id="home">
        <img src="../assets\images\encyImg/home_enabled.png" slot="icon" v-if="selectedTab == 'home'">
        <img src="../assets\images\encyImg/home_disabled.png" slot="icon" v-else>
        <router-link to="/">
          首页
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="ency">
        <img src="../assets\images\encyImg/ency_enabled.png" slot="icon"  v-if="selectedTab == 'ency'">
        <img src="../assets\images\encyImg/ency_disabled.png" slot="icon" v-else>
        <router-link to="/encyclopedias">
          百科
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="release">
        <router-link to="/pushcard">
          <img src="../assets\images\encyImg/release_enabled.png" v-if="selectedTab == 'release'">
          <img src="../assets\images\encyImg/release_disabled.png"  v-else>
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="lightning">
          <img src="../assets\images\encyImg/lightning_enabled.png" slot="icon"  v-if="selectedTab == 'lightning'">
          <img src="../assets\images\encyImg/lightning_disabled.png" slot="icon" v-else>
        <router-link to="/sport">
          运动
        </router-link>
      </mt-tab-item>
      <mt-tab-item id="me">
        <img src="../assets\images\encyImg/me_enabled.png" slot="icon"  v-if="selectedTab == 'me'">
        <img src="../assets\images\encyImg/me_disabled.png" slot="icon" v-else>
        <router-link to="/me">
          我
        </router-link>
        </mt-tab-item>
    </mt-tabbar>    
  </div>
</template>

<script>
export default {
  data(){
    return {
      selectedTab:'home'
    }
  }
}
</script>