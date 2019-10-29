<template>
  <div id="measure-widget" class="clearfix">
    <div class="t-item" :class="{'active':active==='distance'}" @click.stop="handleClick('distance')">测距</div>
    <div class="t-item" :class="{'active':active==='area'}" @click.stop="handleClick('area')">测面</div>
    <div v-if="fullScreen" class="t-item" @click.stop="openFullScreen">全屏</div>
  </div>
</template>


<script>
  import '../plugins/leaflet-measure-path.css';
  import '../plugins/leaflet-measure-path.js';
  import { LineUtil, circleMarker, polyline, polygon } from 'leaflet'
  export default {
    inject: ['getMap'],
    props: {
      position: {
        type: Object,
        default: () => {
          return {};
        }
      },
      fullScreen: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        active: ''
      };
    },
    mounted() {
      this.mapInstance = this.getMap();
      // this.measureLines = [];
      // this.measurePolygons = [];
    },
    methods: {
      measureLine() {
        this.measureLinePoints = [];
        let linePaths = [];
        this.lineLayer = null;
        this._startDrawLine = e => {
          this.mapInstance.off('click', this._startDrawLine);
          this._moveDrawLine && this.mapInstance.off('mousemove', this._moveDrawLine);
          this._endDrawLine && this.mapInstance.off('dblclick', this._endDrawLine);
          this.mapInstance.on('click', this._startDrawLine);

          const clickLatLng = e.latlng;
          linePaths.push(clickLatLng);
          let clickPoint = circleMarker(clickLatLng, {
            radius: 4,
            color: '#FE6D0E'
          }).addTo(this.mapInstance);
          this.measureLinePoints.push(clickPoint);

          this._moveDrawLine = e => {
            const movingLatLng = e.latlng;
            if (this.lineLayer) {
              this.lineLayer.remove();
              linePaths.pop();
            }
            linePaths.push(movingLatLng);
            this.lineLayer = polyline(linePaths, {
              color: '#FE7F0A',
              weight: 6,
              opacity: 0.7
            }).addTo(this.mapInstance).showMeasurements();
          };
          this.mapInstance.on('mousemove', this._moveDrawLine);

          this._endDrawLine = () => {
            this.mapInstance.off('click', this._startDrawLine);
            this.mapInstance.off('mousemove', this._moveDrawLine);
            this.mapInstance.off('dblclick', this._endDrawLine);
          };
          this.mapInstance.on('dblclick', this._endDrawLine);
        }
        
        this.mapInstance.on('click', this._startDrawLine);
      },
      measurePolygon() {
        this.measurePolygonPoints = [];
        let polygonPaths = [];
        this.polygonLayer = null;
        this._startDrawPolygon = e => {
          this.mapInstance.off('click', this._startDrawPolygon);
          this._moveDrawPolygon && this.mapInstance.off('mousemove', this._moveDrawPolygon);
          this._endDrawPolygon && this.mapInstance.off('dblclick', this._endDrawPolygon);
          this.mapInstance.on('click', this._startDrawPolygon);

          let clickLatLng = e.latlng;
          polygonPaths.push(clickLatLng);
          let clickPoint = circleMarker(clickLatLng, {
            radius: 4,
            color: '#FE6D0E'
          }).addTo(this.mapInstance);
          this.measurePolygonPoints.push(clickPoint);
          
          this._moveDrawPolygon = e => {
            const movingLatLng = e.latlng;
            if (this.polygonLayer) {
              this.polygonLayer.remove();
              polygonPaths.pop();
            }
            polygonPaths.push(movingLatLng);
            this.polygonLayer = polygon(polygonPaths, {
              color: '#FE7F0A',
              weight: 6,
              opacity: 0.7
            }).addTo(this.mapInstance).showMeasurements();
          };
          this.mapInstance.on('mousemove', this._moveDrawPolygon);

          this._endDrawPolygon = () => {
            this.mapInstance.off('click', this._startDrawPolygon);
            this.mapInstance.off('mousemove', this._moveDrawPolygon);
            this.mapInstance.off('dblclick', this._endDrawPolygon);
          };
          this.mapInstance.on('dblclick', this._endDrawPolygon);
        };

        this.mapInstance.on('click', this._startDrawPolygon);
      },
      clearLine() {
        if (this.measureLinePoints) {
          this.measureLinePoints.forEach(item => {
            item.remove();
          });
          this.measureLinePoints.length = 0;
        }
        if (this.lineLayer) {
          this.lineLayer.remove();
          this.lineLayer = null;
        }
        this._startDrawLine && this.mapInstance.off('click', this._startDrawLine);
        this._moveDrawLine && this.mapInstance.off('mousemove', this._moveDrawLine);
        this._endDrawLine && this.mapInstance.off('dblclick', this._endDrawLine);
      },
      clearPolygon() {
        if (this.measurePolygonPoints) {
          this.measurePolygonPoints.forEach(p => {
            p.remove();
          });
          this.measurePolygonPoints.length = 0;
        }
        if (this.polygonLayer) {
          this.polygonLayer.remove();
          this.polygonLayer = null;
        }
        this._startDrawPolygon && this.mapInstance.off('click', this._startDrawPolygon);
        this._moveDrawPolygon && this.mapInstance.off('mousemove', this._moveDrawPolygon);
        this._endDrawPolygon && this.mapInstance.off('dblclick', this._endDrawPolygon);
      },
      setActiveWidget(type) {
        switch (type) {
        case "distance":
          this.measureLine();
          break;
        case "area":
          this.measurePolygon();
          break;
        default:
          this.clearLine();
          this.clearPolygon();
          break;
        }
      },
      handleClick(command) {
        this.setActiveWidget(null);
        if (this.active === command) {
          this.active = '';
        } else {
          this.active = command;
        }
        this.setActiveWidget(this.active);
      },
      openFullScreen() {
        let wrap = this.mapInstance.getContainer().parentNode;
        if (this.$route.name === 'home_index') {
          wrap = wrap.parentNode;
        }
        let el = wrap,
            rfs =
              el.requestFullScreen ||
              el.webkitRequestFullScreen ||
              el.mozRequestFullScreen ||
              el.msRequestFullScreen,
            wscript;

        if (typeof rfs !== "undefined" && rfs) {
          rfs.call(el);
          return;
        }

        if (typeof window.ActiveXObject !== "undefined") {
          wscript = new ActiveXObject("WScript.Shell");
          if (wscript) {
            wscript.SendKeys("{F11}");
          }
        }
      },
      exitFullscreen() {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      },
    },
    beforeDestroy() {
      this.clearLine();
      this.clearPolygon();
    }
  };
</script>

<style lang="scss" scoped>
  #measure-widget {
    position: absolute;
    top: 20px;
    right: 20px;
    height: 48px;
    padding: 15px 0;
    line-height: 18px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 3px 14px rgba(0,0,0,0.4);
    z-index: 1000;
    font-size: 14px;
    .t-item {
      float: left;
      width: 80px;
      height: 100%;
      text-align: center;
      cursor: pointer;
      border-right: 0.5px solid rgba(229,229,229,1);;
      &.active {
        color: #0D69DF;
      }
      &:last-child {
        border-right: none;
      }
    }
  }
</style>
