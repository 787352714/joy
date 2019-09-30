<template>
    <div :id='id' class="L7-map"></div>
</template>
<script>
import * as L7 from '@antv/l7';
export default {
  props:{
    id: {
      type: String,
      default: 'map'
    },
    center: {
      type: Array,
      default: ()=>{
        return []
      }
    },
    viewMode: {
      type: String,
      default: '3D'
    },
    zoom: {
      type: Number,
      default: 0
    },
    mapStyle: { 
      type: String,
      default: 'dark'
    },
    pitch: {
      type: Number,
      default: 0
    },
    minZoom: {
      type: Number,
      default: 0
    },
    maxZoom: {
      type: Number,
      default: 22
    },
    rotateEnable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      
    }
  },
  methods:{
    getZoom(){
      return this.scene.getZoom();
    },
    getLayer(){
      return this.scene.getLayer();
    },
    getCenter(){
      return this.scene.getCenter();
    },
    getSize(){
      return this.scene.getSize();
    },
    getPitch(){
      return this.scene.getPitch();
    },
    setCenter(center=[]){
      this.scene.setCenter(center);
    },
    setZoomAndCenter(zoom=0,center=[]){
      this.scene.setZoomAndCenter(zoom,center);
    },
    setRotation(rotation=0){
      this.scene.setRotation(rotation);
    },
    zoomIn(){
      this.scene.zoomIn();
    },
    zoomOut(){
      this.scene.zoomOut();
    },
    panTo(center=[]){
      this.scene.panTo(center);
    },
    panBy(x=0,y=0){//正向右，下
      this.scene.panBy(x,y);
    },
    setPitch(pitch=0){
      this.scene.setPitch(pitch);
    },
    setStatus(status={}){
      this.scene.setStatus(status);
    },
    fitBounds(bounds=[]){//传一个length为4的数组，[minlng,minlat,maxlng,maxlat]
      this.scene.fitBounds(bounds);
    },
    removeLayer(layer={}){
      this.scene.removeLayer(layer);
    },
    getLayers(){
      return this.scene.getLayer();
    },
    onEvnet(eventName,hander){ //事件请写在mounted
      this.scene.on('loaded',()=>{
        this.scene.on(eventName,hander);
      })
    }
  },
  mounted() {
    this.scene = new L7.Scene({
      id: this.id,
      mapStyle:this.mapStyle,
      center:this.center,
      pitch:this.pitch,
      zoom:this.zoom,
      minZoom:this.minZoom,
      maxZoom:this.maxZoom,
      rotateEnable:this.rotateEnable
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