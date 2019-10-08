<template>
  <div class="demo">
    <lmap :center="[102.602992, 23.107329]" :pitch="15" :zoom="13.82" mapStyle='dark' ref="Lmap">
      <LineLayer v-if="jsonData" :jsonData="jsonData"></LineLayer> 
    </lmap>
    <button @click="testEvent">测试按钮</button>
  </div>
</template>
<script>
import axios from 'axios';
import map from '../components/map';
import LineLayer from '../components/LineLayer';


export default {
  data() {
    return {
      jsonData: null
    }
  },
  methods:{
    testEvent(){
      let a= this.$refs.Lmap.getZoom();
      console.log('a :', a); 
    }
  },
  mounted(){
    this.$refs.Lmap.onEvnet('click',()=>{
        console.log(111)
    });
  },
  created() {
    axios.get('https://gw.alipayobjects.com/os/rmsportal/ZVfOvhVCzwBkISNsuKCc.json').then(res => {
      this.jsonData = Object.freeze(res.data);
      console.log('this.jsonData :', this.jsonData);
    })
  },
  components:{
    lmap: map,
    LineLayer
  }
}
</script>
<style scoped>
  .demo{
    height: 800px;
    width: 1800px;
  }
</style>