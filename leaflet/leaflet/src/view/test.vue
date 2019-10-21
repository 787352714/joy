<template>
  <div class="map">
    <L-map id="LMap" ref="map" :center="mapCenter" :zoom="mapZoom" :min-zoom="7">
      <LTileLayer></LTileLayer>
    </L-map>
  </div>
</template>
<script>
import { LMap,LTileLayer } from '../components/leaflet'
export default {
  data(){
    return {
      mapZoom: 11,
      mapCenter: {lat: 30.2404, lng: 120.5696},
    }
  },
  components:{
    LMap,
    LTileLayer
  }
}
</script>
<style lang="scss" scoped>
  .map {
    height: 100%;
    width: 100%
  }
  .tileLayer{
    height: 100%;
    width: 100%
  }
</style>