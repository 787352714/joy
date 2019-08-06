<template>
  <div>
    <h3>axios</h3>
    <ul>
      <li v-for="item in list" :key="item.id">{{item.body}}</li>
    </ul>
    <el-button @click="addPosts(postData)">添加</el-button>
  </div>
</template>
<script>
import { getPosts,postPs } from '../api/index';
export default {
  data(){
    return{
      title:null,
      body:null,
      paramas:{userId:1},
      list:null,
      postData:JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      })
    }
  },
  mounted() {
    this.setPosts(this.paramas);
  },
  methods: {
    setPosts(paramas){
      getPosts(paramas).then(res=>{
        this.list=res;
        console.log(res)
      })
    },
    async addPosts(postData){
      await  postPs(postData).then(response=>{
        console.log(response);
      })
      this.setPosts(this.paramas);
    }
  },
}
</script>