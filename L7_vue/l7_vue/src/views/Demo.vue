<template>
  <div>
    <lmap :center="[102.602992, 23.107329]" :pitch="15" :zoom="13.82">
      <LineLayer v-if="jsonData" :json-data="jsonData"></LineLayer> 
    </lmap>
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
  created() {
    axios.get('https://gw.alipayobjects.com/os/rmsportal/ZVfOvhVCzwBkISNsuKCc.json').then(res => {
      this.jsonData = Object.freeze(res.data);
    })
  },
  components:{
    lmap: map,
    LineLayer
  }
}
</script>