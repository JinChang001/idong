<template>
  <div>
     <!-- 底部选项卡开始 -->
    <mt-tabbar v-model="active" fixed>
      <mt-tab-item v-for="(item, index) of list" :id='item.id' :key='index'>
        <img :src="require('../assets/images/encyImg/'+item.id+'_enabled.png')" slot="icon" v-if="active == item.id">
        <img :src="require('../assets/images/encyImg/'+item.id+'_disabled.png')" slot="icon" v-else>
        <!-- <router-link :to="{name: item.path}"> -->
          {{item.name}}
        <!-- </router-link> -->
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active:'home',
      list:[
        {
          id: 'home',
          name:'首页',
          path:'home'
        },
        {
          id: 'ency',
          name:'百科',
          path:'encyclopedias'
        },
        {
          id: 'pushcard',
          name:'发布',
          path:'pushcard'
        },
        {
          id: 'sport',
          name:'运动',
          path: 'sport'
        },
        {
          id: 'me',
          name:'我',
          path:'me'
        }
      ]
    }
  },
  watch:{
    // 监听avtive跳转页面
    active(newVal,oldVal){
      // console.log(newVal,oldVal)
      // console.log(this.list.filter(item => item.id == newVal))
      if(newVal != oldVal){
        this.$router.push({name: this.list.filter(item => item.id == newVal)[0].path});
      } 
    }
  }
}
</script>