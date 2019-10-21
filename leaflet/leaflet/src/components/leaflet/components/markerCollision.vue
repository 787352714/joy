<script>
  import '../plugins/Leaflet.LayerGroup.Collision';
  import { layerGroup, DomEvent } from 'leaflet';
  import propsMixin from '../mixins/props';

  export default {
    mixins: [propsMixin],
    props: {
      margin: {
        type: Number,
        default: 5
      },
      visible: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        ready: false
      };
    },
    mounted() {
      this.layer = layerGroup.collision({ margin: this.margin });

      DomEvent.on(this.layer, this.$listeners);
      this.bindPropsWatch();
      this.parentLayer = this.$parent.layer;
      this.visible && this.parentLayer.addLayer(this.layer);

      this.$nextTick(() => {
        this.ready = true;
        this.$emit('loaded', this.layer);
      });
    },
    beforeDestroy() {
      this.parentLayer && this.parentLayer.removeLayer(this.layer);
    },
    methods: {
      addLayer(layer) {
        this.layer && this.layer.addLayer(layer);
      },
      setVisible(newVal, oldVal) {
        if (newVal === oldVal) return;
        if (newVal) {
          if (!this.parentLayer.hasLayer(this.layer)) {
            this.parentLayer.addLayer(this.layer);
          }
        } else {
          this.parentLayer.removeLayer(this.layer);
        }
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
