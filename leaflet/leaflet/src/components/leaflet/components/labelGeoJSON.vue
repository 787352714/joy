<script>
  import '../plugins/ctxtextpath';
  import '../plugins/L.LabelTextCollision';
  import '../plugins/Leaflet.streetlabels';

  import { geoJSON, DomEvent, StreetLabels } from 'leaflet';
  import layerMixin from '../mixins/layer';
  import propsMixin from '../mixins/props';

  const defaultLabelOpt = {
    collisionFlg: true,
    limitZoom: null,
    propertyName: 'label',
    showLabelIf: () => true,
    showArrowIf: false,
    offset: [0, 0]
  };

  const defaultFontStyle = {
    dynamicFontSize: false,
    fontSize: 8,
    fontSizeUnit: 'px',
    lineWidth: 4.0,
    fillStyle: 'black',
    strokeStyle: 'white'
  };

  export default {
    mixins: [layerMixin, propsMixin],
    inject: ['getMap'],
    props: {
      geoData: {
        type: [Object, Array],
        default: () => {}
      },
      geoStyle: {
        type: [Object, Function],
        default: null
      },
      labelOpt: {
        type: Object,
        default: () => defaultLabelOpt
      },
      fontStyle: {
        type: Object,
        default: () => defaultFontStyle
      }
    },
    data() {
      return {
        ready: false
      };
    },
    mounted() {
      const labelOptions = {...defaultLabelOpt, ...this.labelOpt, fontStyle: {...defaultFontStyle, ...this.fontStyle}};

      this.labelsRenderer = new StreetLabels(labelOptions);

      const options = this.mergeProps({
        ...this.layerOptions,
        style: this.geoStyle,
        renderer: this.labelsRenderer
      });

      this.layer = geoJSON(this.geoData, options);
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
