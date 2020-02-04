<template>
  <div class="goodsDetail">
    <h1> 商品详情</h1>
    {{$route.params.id}}
    {{detail}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  asyncData({error}){
    return axios.get('/mock/data1.json').then((result) => {
      console.log('result :', result);
      return {
        detail:result.data
      }
    }).catch((err) => {
      error({statusCode:404,message:'post not fond'})
    });
    // try {
    //   const result =await axios.get('/mock/data1.json');
    //   console.log('result :', result);
    //   return {
    //     detail: result.data
    //   }
    // } catch (e) {
    // }
  }
}
</script>

<style>

</style>