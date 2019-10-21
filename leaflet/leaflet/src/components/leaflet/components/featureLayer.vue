<script>
  import { DomEvent } from 'leaflet';
  import { featureLayer } from 'esri-leaflet';
  import layerMixin from '../mixins/layer';
  import propsMixin from '../mixins/props';

  export default {
    mixins: [propsMixin, layerMixin],
    props: {
      url: {
        type: String,
        required: true
      },
      pointToLayer: {
        type: Function,
        default: null
      },
      renderStyle: {
        type: [Function, Object],
        default: null
      },
      onEachFeature: {
        type: Function,
        default: null
      },
      where: {
        type: String,
        default: null
      },
      maxZoom: {
        type: Number,
        default: null
      },
      minZoom: {
        type: Number,
        default: null
      },
      cacheLayers: {
        type: Boolean,
        default: false
      },
      fields: {
        type: Array,
        default: null
      },
      from: {
        type: String,
        default: null
      },
      to: {
        type: String,
        default: null
      },
      renderer: {
        type: Object,
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
        pointToLayer: this.pointToLayer,
        style: this.renderStyle,
        onEachFeature: this.onEachFeature,
        where: this.where,
        maxZoom: this.maxZoom,
        minZoom: this.minZoom,
        cacheLayers: this.cacheLayers,
        fields: this.fields,
        from: this.from,
        to: this.to,
        renderer: this.renderer
      });

      this.layer = featureLayer(options);
      DomEvent.on(this.layer, this.$listeners);
      this.bindPropsWatch();
      this.parentLayer = this.$parent.layer;
      this.visible && this.parentLayer.addLayer(this.layer);

      this.$nextTick(() => {
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
