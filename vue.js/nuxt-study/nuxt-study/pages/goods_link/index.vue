<template>
  <div class="goods-link">
    <h1>商品列表</h1>
    <ul>
      <nuxt-link :to="`/goods_detail/${item.id}`" tag="li" v-for="item in goodsList" :key="item.id">名称：{{item.name}},价格：{{item.prince}}</nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      goodsList:[
        {id:100,name:'iphone',prince:1000},
        {id:"111",name:'iphone1',prince:1000},
        {id:102,name:'iphone2',prince:1000},
        {id:103,name:'iphone3',prince:1000}
      ]
    }
  }
}
</script>

<style>

</style>