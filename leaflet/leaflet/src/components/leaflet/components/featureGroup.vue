<script>
  import { featureGroup, DomEvent } from 'leaflet';
  import layerMixin from '../mixins/layer';
  import propsMixin from '../mixins/props';

  export default {
    inject: ['getMap'],
    mixins: [layerMixin, propsMixin],
    data() {
      return {
        ready: false
      };
    },
    mounted() {
      const options = this.mergeProps({
        ...this.layerOptions
      });

      this.layer = featureGroup([], options);
      this.index && this.layer.setIndex(this.index);
      this.extend && this.layer.setExtend(this.extend);
      DomEvent.on(this.layer, this.$listeners);
      this.bindPropsWatch();
      this.parentLayer = this.$parent.layer;
      this.visible && this.parentLayer.addLayer(this.layer);
      this.layer.locateLayer = this.locateLayer.bind(this);

      this.$nextTick(() => {
        this.ready = true;
        this.$emit('loaded', this.layer);
      });
    },
    methods: {
      locateLayer(index, options = {}, callback) {
        if (index == null) return;
        clearTimeout(this.panTimer);
        const { offset = [0, 0], animate = true } = options;
        const mapInstance = this.getMap();
        const layers = this.layer.getLayers();
        const target = layers.find(layer => layer.__index === index);
        if (!target) return;
        const targetLatLng = target.getLatLng();
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
    beforeDestroy() {
      this.panTimer && clearTimeout(this.panTimer);
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
