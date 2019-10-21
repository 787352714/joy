<script>
  import { imageOverlay, latLng, latLngBounds, DomEvent } from 'leaflet';
  import layerMixin from '../mixins/layer';
  import gridLayerMixin from '../mixins/gridLayer';
  import propsMixin from '../mixins/props';
  import { TILE_URL } from '../utils/index';

  export default {
    mixins: [layerMixin, gridLayerMixin, propsMixin],
    props: {
      url: {
        type: String,
        default: TILE_URL
      },
      className: {
        type: String,
        default: ''
      },
      bounds: {
        type: Array,
        default: () => []
      },
      options: {
        type: Object,
        default: () => {}
      },
      zIndex: {
        type: Number,
        default: 1
      }
    },
    mounted() {
      const options = this.mergeProps({
        ...this.layerOptions,
        ...this.gridLayerOptions
      });

      this.layer = imageOverlay(this.url, this.bounds);
      DomEvent.on(this.layer, this.$listeners);
      this.bindPropsWatch();
      this.parentLayer = this.$parent.layer;
      this.visible && this.parentLayer.addLayer(this.layer);

      this.$nextTick(() => {
        this.$emit('loaded', this.layer);
      });
    },
    render() {
      return null;
    }
  };
</script>
