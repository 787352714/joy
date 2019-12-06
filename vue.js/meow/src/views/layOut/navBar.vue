<template>
  <div class="navBar">
    <div class="top">
      <i class="el-icon-s-grid"></i>
      <i class="el-icon-search"></i>
    </div>
    <div class="nav">
      <ul>
        <li>Drinks</li>
        <li>Food</li>
        <li>Bakery</li>
      </ul>
    </div>
    <div class="footer">
      <i class="el-icon-s-operation"></i>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navBar{
    height: 100%;
    width: $per-size *130;
    background-color: $baseColor;
    padding: $per-size * 70
  }
</style>