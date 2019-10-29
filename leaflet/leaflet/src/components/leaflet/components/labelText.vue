<script>
  import { tooltip, DomEvent } from 'leaflet';
  import divOverlayMixin from '../mixins/divOverlay';
  import propsMixin from '../mixins/props';
  import { objToStyleStr } from '../utils/index';

  const defaultFontStyle = {
    color: '#1a1a1a',
    fontSize: 14,
    textShadow: '#fff 0 0 0, #fff 0 1px 0, #fff 0 0 0, #fff 0 -1px 0',
    fontWeight: 'normal'
  };

  export default {
    mixins: [divOverlayMixin, propsMixin],
    inject: ['getMap'],
    props: {
      pane: {
        type: String,
        default: 'tooltipPane'
      },
      attribution: {
        type: String,
        default: null
      },
      content: {
        type: String,
        default: '提示'
      },
      direction: {
        type: String,
        default: 'top'
      },
      opacity: {
        type: Number,
        default: 1
      },
      fontStyle: {
        type: Object,
        default: () => {
          return {};
        }
      },
      hoverStyle: {
        type: Object,
        default: () => {
          return {};
        }
      },
      limitZoom: {
        type: Number,
        default: null
      },
      visible: {
        type: Boolean,
        default: true
      }
    },
    mounted() {
      const options = this.mergeProps({
        ...this.divOverlayOptions,
        pane: this.pane,
        permanent: true,
        sticky: this.sticky,
        direction: this.direction,
        opacity: this.opacity,
        className: this.className + ' leaflet-labelText'
      });
      this.resetfontStyleStr = objToStyleStr({...defaultFontStyle, ...this.fontStyle});
      this.hoverFontStyleStr = objToStyleStr({...defaultFontStyle, ...this.hoverStyle});

      this.layer = tooltip(options);
      DomEvent.on(this.layer, this.$listeners);
      this.bindPropsWatch();
      this.layer.setContent(`<div class="font-wrapper" style="${this.resetfontStyleStr}">${this.content}</div>`);
      this.parentLayer = this.$parent.layer;
      if (!!this.limitZoom) {
        this.addZoomVisibleListener();
      } else {
        this.visible && this.parentLayer.bindTooltip(this.layer);
      }
      if (Object.keys(this.hoverStyle).length > 0) {
        this.addParentHoverListener();
      }

      this.$nextTick(() => {
        this.$emit('loaded', this.layer);
      });
    },
    beforeDestroy() {
      !!this.parentLayer && this.parentLayer.unbindTooltip();
      !!this._zoomEndHandler && this.LMap.off('zoomend', this._zoomEndHandler);
      !!this._mouseOverHandler && this.parentLayer.off('mouseover', this._mouseOverHandler);
      !!this._mouseOutHandler && this.parentLayer.off('mouseover', this._mouseOutHandler);
    },
    methods: {
      setOpacity(newVal, oldVal) {
        const oldOpacity = oldVal || this.layer.options.opacity;
        if (oldOpacity !== newVal) {
          this.layer.setOpacity(newVal);
        }
      },
      setVisible(newVal, oldVal) {
        if (newVal === oldVal) return;
        if (newVal) {
          this.parentLayer.bindTooltip(this.layer);
        } else {
          this.parentLayer.unbindTooltip(this.layer);
        }
      },
      addZoomVisibleListener() {
        this.LMap = this.getMap();
        this.zoomVisible = false;
        this._zoomEndHandler = () => {
          const zoom = this.LMap.getZoom();
          if (this.zoomVisible === (zoom >= this.limitZoom)) return;
          this.zoomVisible = zoom >= this.limitZoom;
          if (this.zoomVisible) {
            this.parentLayer.bindTooltip(this.layer);
          } else {
            this.parentLayer.unbindTooltip(this.layer);
          }
        };
        this._zoomEndHandler();
        this.LMap.on('zoomend', this._zoomEndHandler);
      },
      addParentHoverListener() {
        this._mouseOverHandler = () => {
          if (!this.layer.getElement()) return;
          const $textWrapper = this.layer.getElement().querySelector('.font-wrapper');
          $textWrapper.style = this.hoverFontStyleStr;
        };
        this._mouseOutHandler = () => {
          if (!this.layer.getElement()) return;
          const $textWrapper = this.layer.getElement().querySelector('.font-wrapper');
          $textWrapper.style = this.resetfontStyleStr;
        };
        this.parentLayer.on('mouseover', this._mouseOverHandler);
        this.parentLayer.on('mouseout', this._mouseOutHandler);
      }
    },
    render(h) {
      return null;
    }
  };
</script>

<style lang="scss">
  .leaflet-labelText {
    background-color: transparent;
    white-space: nowrap;
    pointer-events: auto;
    border: 1px solid transparent;
    box-shadow: none;
    &:before {
      display: none;
    }
  }
</style>
