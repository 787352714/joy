<script>
  import { DomEvent } from 'leaflet';
  import { dynamicMapLayer } from 'esri-leaflet';
  import propsMixin from '../mixins/props';
  import layerMixin from '../mixins/layer';

  export default {
    mixins: [layerMixin, propsMixin],
    props: {
      url: {
        type: String,
        default: 'Streets'
      },
      format: {
        type: String,
        default: 'png24'
      },
      transparent: {
        type: Boolean,
        default: true
      },
      attribution: {
        type: String,
        default: null
      },
      layers: {
        type: Array,
        default: null
      },
      layerDefs: {
        type: Object,
        default: null
      },
      opacity: {
        type: Number,
        default: 0.8
      },
      pane: {
        type: String,
        default: 'overlayPane'
      },
      zIndex: {
        type: Number,
        default: null
      },
      maxZoom: {
        type: Number,
        default: null
      },
      minZoom: {
        type: Number,
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
        url: this.url,
        format: this.format,
        transparent: this.transparent,
        attribution: this.attribution,
        layers: this.layers,
        layerDefs: this.layerDefs,
        opacity: this.opacity,
        pane: this.pane,
        zIndex: this.zIndex,
        position: this.position,
        maxZoom: this.maxZoom,
        minZoom: this.minZoom
      });
      this.parentLayer = this.$parent.layer;
      this.layer = dynamicMapLayer(options);
      DomEvent.on(this.layer, this.$listeners);
      this.bindPropsWatch();
      this.parentLayer = this.$parent.layer;
      this.visible && this.parentLayer.addLayer(this.layer);

      this.$nextTick(() => {
        this.ready = true;
        this.$emit('loaded', this.layer);
      });
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
