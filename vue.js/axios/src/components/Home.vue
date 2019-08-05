<template>
  <div>
    <h3>axios</h3>
  </div>
</template>
<script>
import { getPosts } from '../api/index';
export default {
  data(){
    return{
      title:null,
      body:null,
      paramas:{userId:2}
    }
  },
  mounted() {
    this.setPosts(this.paramas);
  },
  methods: {
    setPosts(paramas){
      getPosts(paramas).then(res=>{
        console.log(res);
      })
    }
  },
}
</script>