<script>
  import { tileLayer, DomEvent } from 'leaflet';
  import layerMixin from '../mixins/layer';
  import gridLayerMixin from '../mixins/gridLayer';
  import propsMixin from '../mixins/props';
  import { TILE_URL } from '../utils/index';

  export default {
    mixins: [layerMixin, gridLayerMixin, propsMixin],
    props: {
      url: {
        type: String,
        default: () => TILE_URL
      },
      minZoom: {
        type: Number,
        default: 1
      },
      maxZoom: {
        type: Number,
        default: 10
      },
      tileLayerClass: {
        type: Function,
        default: tileLayer
      },
      options: {
        type: Object,
        default: () => {}
      }
    },
    mounted() {
      const options = this.mergeProps({
        ...this.layerOptions,
        ...this.gridLayerOptions,
        minZoom: this.minZoom,
        maxZoom: this.maxZoom
      });
      this.layer = this.tileLayerClass(this.url, options);
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
