export default {
  props: {
    index: {
      type: [String, Number],
      default: null
    },
    extend: {
      type: Object,
      default: null
    },
    pane: {
      type: String,
      default: 'overlayPane'
    },
    attribution: {
      type: String,
      default: null
    },
    visible: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.layerOptions = {
      pane: this.pane,
      attribution: this.attribution
    };
  },
  beforeDestroy() {
    this.layer.off();
    this.parentLayer && this.parentLayer.removeLayer(this.layer);
  },
  methods: {
    setVisible(newVal, oldVal) {
      if (newVal) {
        if (!this.parentLayer.hasLayer(this.layer)) {
          this.parentLayer.addLayer(this.layer);
        }
      } else {
        this.parentLayer.removeLayer(this.layer);
      }
    },
    getLayer() {
      return this.layer;
    }
  }
};
