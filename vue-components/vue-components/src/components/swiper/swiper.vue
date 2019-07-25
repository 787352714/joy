<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item>
      <img :src="item" alt="" v-for="(item,index) in img" :key='index'>
    </el-carousel-item>
    <el-carousel-item>
      <img :src="item" alt="" v-for="(item,index) in img" :key='index'>
    </el-carousel-item>
    <el-carousel-item>
      <img :src="item" alt="" v-for="(item,index) in img" :key='index'>
    </el-carousel-item>
    <el-carousel-item>
      <img :src="item" alt="" v-for="(item,index) in img" :key='index'>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data(){
    return{
      img:[
        'http://img.redocn.com/sheji/20141219/zhongguofengdaodeliyizhanbanzhijing_3744115.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1022109268,3759531978&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2594954460,618903872&fm=26&gp=0.jpg',
      ]
    }
  }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>