<template>
    <div class="index-title">
      <!-- 直接从props中获取name属性 -->
      <span class="index-title-content">{{name}}</span>    
    </div>
</template>
<style scoped>
.index-title{
  height: 40px;
  margin-top: 5px;
}
.index-title span{
  line-height: 30px;
  font-size: 1.3rem;
  color: #777;
  font-weight: normal;
  margin-left: 10px;
}
</style>
<script>
export default {
  props:['name']
}
</script>