<template>
  <div class="search">
    <div id="searchbar">
      <form action="/">
        <van-search
          v-model="searchValue"
          placeholder="请输入搜索关键词"
          show-action
          @input="onSearch"
          @cancel="onCancel"
          @blur="onCancel"
        />
      </form>
    </div>
    <div id="searchContainer">
      <van-popup v-model="show" :overlay="false" :get-container="getContainer" :style="{ width: '100%',position:'absolute',top:'33%','text-align':'left'}">
        <van-list>
          <van-cell
            v-for="item in list"
            :key="item"
            :title="item"
          />
        </van-list>
      </van-popup>
    </div>
    <div class="goodsButton">
      <!-- 利用循环v-for -->
      <van-button v-for="(item,index) in goodsList" :key="index" plain hairline type="default" size="mini" :style="{'margin-bottom':'10px','margin-left':'10px' }">{{item}}</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      searchValue:'',
      show: false,
      list:[],
      goodsList:['货物1','货物2','货物3','货物221','货物111','货物123123','货物11','货物1','货物1']
    }
  },
  methods: {
    onSearch(){
      //如有接口就在此获取数据赋值给this.list，注意，每输入一次都会调用
      this.show= true;
      this.list=[this.searchValue,this.searchValue,this.searchValue,this.searchValue]
    },
    onCancel(){
      this.searchValue="";
      this.list=[];
      this.show=false;
    },
    getContainer(){
      return document.querySelector('.searchbar');
    }
  },
}
</script>
<style scoped>
  .search{
    width: 100%;
    height: 80%;
  }
  .goodsButton{
    padding-right: 10px;
    margin-top: 15px;
  }
</style>