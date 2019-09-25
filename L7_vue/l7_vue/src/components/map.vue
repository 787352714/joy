<template>
  <div class="L7-map">
    <div :id='id'></div>
  </div>
</template>
<script>
import * as L7 from '@antv/l7';
export default {
  data() {
    const scene = new L7.scene({
      id:this.id,
      mapStyle:this.mapStyle,
      center:this.center,
      pitch:this.pitch
    })
  },
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
  }
}
</script>