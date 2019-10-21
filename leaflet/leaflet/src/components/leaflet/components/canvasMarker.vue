<script>
  import '../plugins/leaflet.canvasMarker';
  import { canvasMarker, DomEvent } from 'leaflet';
  import layerMixin from '../mixins/layer';
  import pathMixin from '../mixins/path';
  import propsMixin from '../mixins/props';

  export default {
    mixins: [layerMixin, propsMixin],
    props: {
      pane: {
        type: String,
        default: 'overlayPane'
      },
      latLng: {
        type: [Object, Array],
        default: null
      },
      src: {
        type: String,
        default: ''
      },
      width: {
        type: Number,
        default: 20
      },
      height: {
        type: Number,
        default: 20
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
        ...this.pathOptions,
        src: this.src,
        width: this.width,
        height: this.height
      });
      this.layer = canvasMarker(this.latLng, options);
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
      setLatLng(newVal, oldVal) {
        this.layer.setLatLng(newVal);
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