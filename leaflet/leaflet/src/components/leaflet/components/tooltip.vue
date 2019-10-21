<script>
  import Vue from 'vue';
  import {tooltip, DomEvent} from 'leaflet';
  import divOverlayMixin from '../mixins/divOverlay';
  import propsMixin from '../mixins/props';

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
      permanent: {
        type: Boolean,
        default: null
      },
      sticky: {
        type: Boolean,
        default: false
      },
      direction: {
        type: String,
        default: 'top'
      },
      opacity: {
        type: Number,
        default: 1
      },
      limitZoom: {
        type: Number,
        default: null
      },
      pointEvents: {
        type: Boolean,
        default: false
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
        permanent: this.permanent,
        sticky: this.sticky,
        direction: this.direction,
        opacity: this.opacity
      });

      this.layer = tooltip(options);
      DomEvent.on(this.layer, this.$listeners);
      this.bindPropsWatch();
      this.setContent();
      this.parentLayer = this.$parent.layer;
      if (this.permanent && !!this.limitZoom) {
        this.addZoomVisibleListener();
      } else {
        this.visible && this.parentLayer.bindTooltip(this.layer);
      }
      if (this.pointEvents) {
        const tooltipEle = this.layer.getElement();
        tooltipEle.style.pointerEvents = 'auto';
      }

      this.$nextTick(() => {
        this.$emit('loaded', this.layer);
      });
    },
    beforeDestroy() {
      !!this.tooltipComp && this.tooltipComp.$destroy();
      !!this.parentLayer && this.parentLayer.unbindTooltip();
      !!this._zoomEndHandler && this.LMap.off('zoomend', this._zoomEndHandler);
    },
    methods: {
      setContent() {
        const slots = this.$slots.default || [];
        if (slots.length) {
          const TooltipComp = Vue.extend({
            data() {
              return {
                vnode: Object.freeze(slots)
              };
            },
            render(h) {
              const {vnode} = this;
              return h('div', {
                className: 'popup-component'
              }, Array.isArray(vnode) ? vnode : [vnode]);
            }
          });
          this.tooltipComp = new TooltipComp().$mount();
          this.layer.setContent(this.tooltipComp.$el);
        } else {
          this.layer.setContent(this.content);
        }
      },
      setOpacity(newVal, oldVal) {
        this.layer.setOpacity(newVal);
      },
      setVisible(newVal, oldVal) {
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
      getLayer() {
        return this.layer;
      }
    },
    render() {
      const slots = this.$slots.default || [];

      if (slots.length) {
        this.tooltipComp && (this.tooltipComp.vnode = Object.freeze(slots));
      }
      return null;
    }
  };
</script>
