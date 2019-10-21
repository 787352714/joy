<script>
  import Vue from 'vue';
  import { popup, DomEvent, Popup } from 'leaflet';
  import divOverlayMixin from '../mixins/divOverlay';
  import propsMixin from '../mixins/props';

  Popup.prototype.getVueComps = function() {
    if (!this._content.__vue__) return;
    return this._content.__vue__.$children;
  }

  export default {
    mixins: [divOverlayMixin, propsMixin],
    inject: ['getMap'],
    props: {
      pane: {
        type: String,
        default: 'popupPane'
      },
      content: {
        type: String,
        default: '弹窗'
      },
      maxWidth: {
        type: Number,
        default: 300
      },
      minWidth: {
        type: Number,
        default: 50
      },
      maxHeight: {
        type: Number,
        default: null
      },
      closeButton: {
        type: Boolean,
        default: true
      },
      autoPan: {
        type: Boolean,
        default: false
      },
      autoClose: {
        type: Boolean,
        default: true
      },
      closeOnClick: {
        type: Boolean,
        default: true
      },
      initVisible: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      const options = this.mergeProps({
        ...this.divOverlayOptions,
        pane: this.pane,
        offset: this.offset,
        maxWidth: this.maxWidth,
        minWidth: this.minWidth,
        maxHeight: this.maxHeight,
        autoPan: this.autoPan,
        closeButton: this.closeButton,
        autoClose: this.autoClose,
        closeOnClick: this.closeOnClick
      });
      
      this.layer = popup(options);
      DomEvent.on(this.layer, this.$listeners);
      this.bindPropsWatch();
      this.setContent();
      this.parentLayer = this.$parent.layer;
      this.parentLayer.bindPopup(this.layer);
      this.initVisible && this.parentLayer.openPopup();

      this.$nextTick(() => {
        this.$emit('loaded', this.layer);
      });
    },
    beforeDestroy() {
      !!this.popupComp && this.popupComp.$destroy();
      !!this.parentLayer && this.parentLayer.unbindPopup();
    },
    methods: {
      setContent() {
        const slots = this.$slots.default || [];
        if (slots.length) {
          const PopupComp = Vue.extend({
            data() {
              return {
                vnode: Object.freeze(slots)
              };
            },
            render(h) {
              const { vnode } = this;

              return h('div', {
                className: 'popup-component'
              }, Array.isArray(vnode) ? vnode : [vnode]);
            }
          });
          this.popupComp = new PopupComp().$mount();
          this.layer.setContent(this.popupComp.$el);
        } else {
          this.layer.setContent(this.content);
        }
      }
    },
    render(h) {
      const slots = this.$slots.default || [];
      if (slots.length) {
        !!this.popupComp && (this.popupComp.vnode = Object.freeze(slots));
      }
      return null;
    }
  };
</script>
