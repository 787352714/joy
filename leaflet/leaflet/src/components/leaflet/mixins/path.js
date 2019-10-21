import { canvas, svg } from 'leaflet'

export default {
  props: {
    stroke: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#3388ff'
    },
    weight: {
      type: Number,
      default: 3
    },
    opacity: {
      type: Number,
      default: 1.0
    },
    lineCap: {
      type: String,
      default: 'round'
    },
    lineJoin: {
      type: String,
      default: 'round'
    },
    dashArray: {
      type: String,
      default: null
    },
    dashOffset: {
      type: String,
      default: null
    },
    fill: {
      type: Boolean,
      default: false
    },
    fillColor: {
      type: String,
      default: '#3388ff'
    },
    fillOpacity: {
      type: Number,
      default: 0.2
    },
    fillRule: {
      type: String,
      default: 'evenodd'
    },
    renderer: {
      type: String,
      default: null
    }
  },
  mounted() {
    let rendererInstance;
    if (this.renderer === 'canvas') {
      rendererInstance = canvas();
    } else if (this.renderer === 'svg') {
      rendererInstance = svg()
    }

    this.pathOptions = {
      stroke: this.stroke,
      color: this.color,
      weight: this.weight,
      opacity: this.opacity,
      lineCap: this.lineCap,
      lineJoin: this.lineJoin,
      dashArray: this.dashArray,
      dashOffset: this.dashOffset,
      fill: this.fill,
      fillColor: this.fillColor,
      fillOpacity: this.fillOpacity,
      fillRule: this.fillRule,
      renderer: rendererInstance
    };
  }
};
