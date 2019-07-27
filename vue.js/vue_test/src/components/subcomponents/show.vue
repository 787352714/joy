<template>
  <div>
    <div class="container" v-for="(msg,index) in comments" :key="index">
      <div class="top">
        <span>name:{{msg.name}}</span>
        <span>
          <a href="#">删除</a>
        </span>
      </div>
      <div class="contant">
        <p>{{msg.contant}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['comments']
};
</script>
<style scoped>
.container {
  width: 48%;
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
}
.top {
  display: flex;
  justify-content: space-between;
}
</style>
