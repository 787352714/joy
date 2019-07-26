<template>
  <div>
    <button @click="right">右</button>
    <button @click="left">左</button>
    <div class="swiper">
      <img :src="item" alt="" v-for="(item,index) in img" :key="index" width="100px" height='100px' :style="{transform:`translateX(${count*100}px)`}" ref="tran">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: [
        "http://img.redocn.com/sheji/20141219/zhongguofengdaodeliyizhanbanzhijing_3744115.jpg",
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3893146502,314297687&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1022109268,3759531978&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2594954460,618903872&fm=26&gp=0.jpg"
      ],
      count:0,
    };
  },
  methods:{
    right(){
      this.count--
      if(this.count==-3){
        this.count=0
      }
      },
    left(){
      this.count++
      if(this.count==2){
        this.count=-1
      }
    }
  }
};
</script>

<style>
.swiper{
  height: 100px;
  width: 200px;
  overflow: hidden;
  display: flex;
}

.active{
  transform: translateX(-100px)
}

</style>