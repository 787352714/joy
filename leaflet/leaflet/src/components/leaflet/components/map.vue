<template>
  <div :id="id" class="leaflet-map">
    <slot v-if="ready"></slot>
  </div>
</template>

<script>
  import 'leaflet/dist/leaflet.css';
  import '../plugins/leaflet.extend';
  import { map, control, DomEvent, CRS, Icon, canvas } from 'leaflet';
  import propsMixin from '../mixins/props';
  import { ICON_DEFAULT } from '../utils';

  // Icon.Default.imagePath = 'static/images/map/';

  export default {
    mixins: [propsMixin],
    provide() {
      return {
        getMap: this.getMap
      };
    },
    props: {
      id: {
        type: String,
        required: true
      },
      options: {
        type: Object,
        default: () => {}
      },
      zoom: {
        type: Number,
        default: 8
      },
      minZoom: {
        type: Number,
        default: null
      },
      maxZoom: {
        type: Number,
        default: null
      },
      zoomSnap: {
        type: Number,
        default: 1
      },
      center: {
        type: [Array, Object],
        default: () => []
      },
      doubleClickZoom: {
        type: Boolean,
        default: false
      },
      dragging: {
        type: Boolean,
        default: true
      },
      crs: {
        type: Object,
        default: () => {
          return Object.freeze(CRS.EPSG3857)
        }
      },
      preferCanvas: {
        type: Boolean,
        default: null
      },
      panes: {
        type: Array,
        default: () => []
      },
      zoomControl: {
        type: Boolean,
        default: false
      },
      attributionControl: {
        type: Boolean,
        default: false
      },
      plugins: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        ready: false
      };
    },
    mounted() {
      const options = this.mergeProps({
        center: this.center,
        zoom: this.zoom,
        minZoom: this.minZoom,
        maxZoom: this.maxZoom,
        zoomSnap: this.zoomSnap,
        preferCanvas: this.preferCanvas,
        doubleClickZoom: this.doubleClickZoom,
        dragging: this.dragging,
        crs: this.crs,
        zoomControl: this.zoomControl,
        attributionControl: this.attributionControl,
        renderer: canvas()
      });

      this.layer = map(this.id, options);
      this.createPanes(this.panes);
      this.addMoveEndListener();
      DomEvent.on(this.layer, this.$listeners);
      this.bindPropsWatch();
      this.addPlugins();
      this.layer.locateLayer = this.locateLayer.bind(this);

      this.$nextTick(() => {
        this.ready = true;
        this.$emit('loaded', this.layer);
      });
    },
    beforeDestroy() {
      this.panTimer && clearTimeout(this.panTimer);
      this.layer.off();
      this.layer.remove();
    },
    methods: {
      setCenter(newVal, oldVal) {
        this.layer.panTo(newVal, {
          animate: false
        });
      },
      setZoom(newVal, oldVal) {
        this.layer.setZoom(newVal);
      },
      setView(center, zoom, animate = false) {
        this.layer.setView(center, zoom, { animate });
        this.$emit('update:center', center);
        this.$emit('update:zoom', zoom);
      },
      createPanes(paneNames) {
        paneNames.forEach(pName => {
          this.layer.createPane(pName);
        });
      },
      locateLayer(index, options = {}, callback) {
        if (index == null) return;
        clearTimeout(this.panTimer);
        const { offset = [0, 0], animate = true } = options;
        const layers = this.layer.getLayers();
        const target = layers.find(layer => layer.__index === index);
        const targetLatLng = target.getLatLng();
        const targetPoint = this.layer.latLngToContainerCenterPoint(targetLatLng);
        this.layer.panBy({
          x: targetPoint.x + offset[0], 
          y: targetPoint.y + offset[1]
        }, { animate });
        this.panTimer = setTimeout(() => {
          callback && callback(target)
        }, 260);
      },
      toggleMeasure() {
        if (!control.linearMeasurement) return;
        if (!this.measureControl) {
          this.measureControl = control.linearMeasurement({
            unitSystem: 'metric',
            color: '#78a4ff',
            fillColor: 'red'
          }).addTo(this.layer);
        }
        this.measureControl.toggleMeasure();
      },
      addMoveEndListener() {
        this._moveEndHandler = () => {
          const center = this.layer.getCenter();
          const zoom = this.layer.getZoom();

          this.$emit('update:center', center);
          this.$emit('update:zoom', zoom);
        };
        this.layer.on('moveend', this._moveEndHandler);
      },
      addPlugins() {
        this.plugins.forEach(pName => {
          import(`../plugins/leaflet.${pName}.scss`).catch(() => {});
          import(`../plugins/leaflet.${pName}.js`).catch(() => {});
        });
      },
      getMap() {
        return this.layer;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .leaflet-map {
    width: 100%;
    height: 100%;
  }
</style>
