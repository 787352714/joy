<script>
  import 'leaflet-rotatedmarker';
  import { marker, DomEvent } from 'leaflet';
  import layerMixin from '../mixins/layer';
  import propsMixin from '../mixins/props';

  export default {
    mixins: [layerMixin, propsMixin],
    props: {
      pane: {
        type: String,
        default: 'markerPane'
      },
      draggable: {
        type: Boolean,
        default: false
      },
      latLng: {
        type: [Object, Array],
        default: null
      },
      zIndexOffset: {
        type: Number,
        default: null
      },
      angle: {
        type: Number,
        default: 90
      },
      origin: {
        type: String,
        default: 'center center'
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
        draggable: this.draggable,
        zIndexOffset: this.zIndexOffset,
        rotationOrigin: this.origin,
        rotationAngle: this.angle
      });

      this.layer = marker(this.latLng, options);
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
