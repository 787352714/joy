<script>
  import { geoJSON, DomEvent } from 'leaflet';
  import layerMixin from '../mixins/layer';
  import propsMixin from '../mixins/props';

  export default {
    mixins: [layerMixin, propsMixin],
    inject: ['getMap'],
    props: {
      geoData: {
        type: [Object, Array],
        default: () => {}
      },
      geoStyle: {
        type: [Object, Function],
        default: null
      },
      pointToLayer: {
        type: Function,
        default: null
      },
      onEachFeature: {
        type: Function,
        default: null
      },
      filter: {
        type: Function,
        default: null
      }
    },
    data() {
      return {
        ready: false
      };
    },
    mounted() {
      const options = this.mergeProps({
        ...this.layerOptions,
        style: this.geoStyle,
        pointToLayer: this.pointToLayer,
        onEachFeature: this.onEachFeature,
        filter: this.filter
      });

      this.layer = geoJSON(this.geoData, options);
      this.layer.locateLayer = this.locateLayer.bind(this);
      this.index && this.layer.setIndex(this.index);
      this.extend && this.layer.setExtend(this.extend);
      DomEvent.on(this.layer, this.$listeners);
      this.bindPropsWatch();
      this.parentLayer = this.$parent.layer;
      this.visible && this.parentLayer.addLayer(this.layer);

      this.$nextTick(() => {
        this.ready = true;
        this.$emit('loaded', this.layer);
      });
    },
    methods: {
      locateLayer(prop, value, options = {}, callback) {
        if (prop == null || value == null) return;
        clearTimeout(this.panTimer);
        const { offset = [0, 0], animate = true } = options;
        const mapInstance = this.getMap();
        const layers = this.layer.getLayers();
        const target = layers.find(layer => layer.feature.properties[prop] === value);
        const targetLatLng = target.getCenter();
        const targetPoint = mapInstance.latLngToContainerCenterPoint(targetLatLng);
        mapInstance.panBy({
          x: targetPoint.x + offset[0], 
          y: targetPoint.y + offset[1]
        }, { animate });
        this.panTimer = setTimeout(() => {
          callback && callback(target)
        }, 260);
      }
    },
    render(h) {
      if (this.ready && this.$slots.default) {
        return h('div', {
          style: {
            display: 'none'
          }
        }, this.$slots.default);
      } else {
        return null;
      }
    }
  };
</script>
