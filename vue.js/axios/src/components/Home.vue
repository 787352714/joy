<template>
  <div>
    <h3>axios</h3>
    <ul>
      <li v-for="item in list" :key="item.id">{{item.body}}</li>
    </ul>
  </div>
</template>
<script>
import { getPosts } from '../api/index';
export default {
  data(){
    return{
      title:null,
      body:null,
      paramas:{userId:1},
      list:null
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
    }
  },
}
</script>