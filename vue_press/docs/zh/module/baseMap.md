## 基础地图
基础底图由地图容器和基础图层构成
### 示例代码
``` vue
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
</style>
```

### 示例展示
<baseMap/>

### Lmap配置项-attributes
| 名称        | 类型           | 说明  |
| ------------- |:-------------:| :-----|
| id      | String | 地图id，必填 |
| zoom | Number      |    地图初始化时缩放层级，默认为8 |
| minZoom      | Number | 地图可缩小的最小层级，无默认值 |
| maxZoom      | Number      |   地图可放大的最大层级，无默认值 |
| center | Array或Object      |    地图初始化时的中心点 |
| zoomSnap      | Number | 强制地图的缩放级别始终为此的倍数，数值0意味着缩放级别将不会被fitBounds放大或缩小。 可以设置小于1（例如0.5）的值。 默认为1|
| doubleClickZoom      | Boolean或string     |   地图是否可以通过双击放大，并通过双击同时按住shift缩小。如果设置为 'center'，双击缩放将缩放到视图的中心，而不管鼠标在哪里。 |
| dragging | Boolean      |    地图是否可以通过鼠标/触摸拖动。默认false |
| crs      | Object | 该地图的坐标系。如果你不确定坐标系这是什么意思，请不要改变它. |
| preferCanvas      | Boolean      |   是否应该在一个 Canvas （画布）渲染器上呈现 Path（路径）.默认情况下，所有路径都是在 SVG呈现程序中呈现的.默认false |
| panes | Array      |    自定义图层承载div，可以放入图层，点图层，面图层等，在此定义pane名后，在图层组件内传入pane名 |
| zoomControl      | Boolean | 默认情况下，是否将 zoom缩放控制 添加到地图中.默认为false |
| plugins      | Array      |   地图可放大的最大层级，无默认值 |
| attributionControl |Boolean      |    默认情况下，是否将 attribution版权控件添加到地图中.默认为false |

### Lmap配置项-methods(使用$refs调用)
| 名称        | 参数           | 说明  |
| ------------- |:-------------:| :-----|
| setCenter      | newVal(新中心点)，oldVal（旧中心点） | 在图层中设置新的中心点newVal |
| setZoom | newVal(新缩放值)，oldVal（旧缩放值）      |    设置地图的缩放值 |
| setView      | 中心点经纬度、zoom缩放级别、缩放平移是否开启动画. |  |
| createPanes      | paneNames（array类型）      |   在图层中创建图层承载div |
| getMap |       |    获取当前地图对象 |
### LtileLayer配置项-attributes
| 名称        | 类型           | 说明  |
| ------------- |:-------------:| :-----|
| url      | String | 用于加载底图的地图服务地址 |
| minZoom | Number      |    设置地图的tileLayer缩放最小值 优先级低于LMap |
| maxZoom      | Number | 设置地图的tileLayer缩放最小值默认为18，优先级低于LMap |
| options      | Object      |   可传入LtileLayer的配置项对象 |
