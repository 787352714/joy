<template>
    <div :id='id' class="L7-map"></div>
</template>
<script>
import * as L7 from '@antv/l7';
export default {
  props:{
    id:{
      type: String,
      default: 'map'
    },
    center:{
      type: Array,
      default: ()=>{
        return []
      }
    },
    viewMode:{
      type: String,
      default: '3D'
    },
    zoom:{
      type: Number,
      default: 0
    },
    mapStyle:{
      type: String,
      default: 'dark'
    }
  },
  data() {
    return {
      
    }
  },
  mounted() {
    this.scene = new L7.Scene({
      id: this.id,
      mapStyle:this.mapStyle,
      center:this.center,
      pitch:this.pitch
    })
  }
}
</script>
<style scoped>
  .L7-map{
    width: 100%;
    height: 100%;
  }
</style>