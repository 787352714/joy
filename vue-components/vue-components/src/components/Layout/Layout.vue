<template>
  <div class="Layout">
    <el-row :gutter="10" style="width:100%" class="row">
      <el-col :span="6"  v-for="(item,index) in items" :key='item.index'><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-button @click="addDiv">添加一个</el-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      items:[1]
    }
  },
  methods:{
    addDiv(){
      this.items.push(1);
    }
  }
}
</script>

<style>
  .row{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
  }
  .el-col {
    border-radius: 4px;
    margin-bottom: 10px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>