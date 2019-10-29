<script>
  import '../plugins/leaflet.textpath.js';
  import { textPolyLine, DomEvent, svg } from 'leaflet';
  import layerMixin from '../mixins/layer';
  import pathMixin from '../mixins/path';
  import propsMixin from '../mixins/props';

  export default {
    mixins: [layerMixin, pathMixin, propsMixin],
    data() {
      return {
        ready: false
      };
    },
    props: {
      latLngs: {
        type: Array,
        default: () => []
      },
      text: {
        type: String,
        default: ''
      },
      textOpt: {
        type: Object,
        default: () => {
          return {};
        }
      },
      smoothFactor: {
        type: Number,
        default: 1
      },
      noClip: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      const options = this.mergeProps({
        ...this.layerOptions,
        ...this.pathOptions,
        smoothFactor: this.smoothFactor,
        noClip: this.noClip,
        renderer: svg()
      });
      
      this.layer = textPolyLine(this.latLngs, options);
      this.setText(this.text);
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
      setText(newVal) {
        this.layer.setText(newVal, this.textOpt);
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
