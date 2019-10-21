<script>
  import 'leaflet.markercluster/dist/MarkerCluster.css';
  import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
  import 'leaflet.markercluster';
  import { markerClusterGroup, DomEvent } from 'leaflet';
  import propsMixin from '../mixins/props';

  export default {
    mixins: [propsMixin],
    props: {
      options: {
        type: Object,
        default: () => {}
      },
      iconCreate: {
        type: Function,
        default: null
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
    methods: {
      addLayer(layer) {
        this.layer && this.layer.addLayer(layer);
      },
      removeLayer(layer) {
        this.layer && this.layer.removeLayer(layer);
      },
      clearLayers() {
        this.layer && this.layer.clearLayers();
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
    mounted() {
      const options = this.mergeProps({
        iconCreateFunction: this.iconCreate
      });

      this.layer = markerClusterGroup(options);
      this.bindPropsWatch();
      DomEvent.on(this.layer, this.$listeners);
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

<style lang="scss">
  .leaflet-div-icon {
    background: transparent;
    border: 1px solid transparent;
  }
</style>
