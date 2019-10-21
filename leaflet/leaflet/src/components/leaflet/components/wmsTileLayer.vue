<script>
  import { tileLayer, DomEvent } from 'leaflet';
  import layerMixin from '../mixins/layer';
  import gridLayerMixin from '../mixins/gridLayer';
  import propsMixin from '../mixins/props';
  import { TILE_URL } from '../utils/index';

  export default {
    mixins: [layerMixin, gridLayerMixin, propsMixin],
    inject: ['getMap'],
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
      options: {
        type: Object,
        default: () => {}
      }
      // tileLayerClass: {
      //   type: Function,
      //   default: tileLayer
      // }
    },
    mounted() {
      const options = this.mergeProps({
        ...this.layerOptions,
        ...this.gridLayerOptions,
        minZoom: this.minZoom,
        maxZoom: this.maxZoom
      });

      this.layer = tileLayer.wms(this.url, options);
      DomEvent.on(this.layer, this.$listeners);
      this.bindPropsWatch();
      this.LMap = this.getMap();
      this.visible && this.LMap.addLayer(this.layer);

      this.$nextTick(() => {
        this.$emit('loaded', this.layer);
      });
    },
    render(h) {
      return null;
    }
  };
</script>
