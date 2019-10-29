<script>
  import { tiledMapLayer } from 'esri-leaflet';
  import { DomEvent } from 'leaflet';
  import layerMixin from '../mixins/layer';
  // import gridLayerMixin from '../mixins/gridLayer';
  import propsMixin from '../mixins/props';

  export default {
    mixins: [propsMixin, layerMixin],
    props: {
      url: {
        type: String,
        required: true
      },
      zoomOffsetAllowance: {
        type: Number,
        default: 0.1
      },
      proxy: {
        type: String,
        default: null
      },
      useCors: {
        type: Boolean,
        default: true
      },
      token: {
        type: String,
        default: null
      },
      visible: {
        type: Boolean,
        default: true
      }
    },
    mounted() {
      const options = this.mergeProps({
        url: this.url,
        zoomOffsetAllowance: this.zoomOffsetAllowance,
        proxy: this.proxy,
        useCors: this.useCors,
        token: this.token
      });

      this.layer = tiledMapLayer(options);
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
