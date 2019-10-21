<script>
  import { icon } from 'leaflet';
  import iconMixin from '../mixins/icon';
  import propsMixin from '../mixins/props';
  import { ICON_DEFAULT, ICON_SHADOW_DEFAULT } from '../utils/index';

  export default {
    mixins: [iconMixin, propsMixin],
    props: {
      iconUrl: {
        type: String,
        default: ICON_DEFAULT
      },
      shadowUrl: {
        type: String,
        default: null
      },
      shadowSize: {
        type: Array,
        default: () => [30, 30]
      },
      shadowAnchor: {
        type: Array,
        default: () => [10, 14]
      }
    },
    mounted() {
      const options = this.mergeProps({
        ...this.iconOptions
      });
      const LIcon = icon(options);
      this.bindPropsWatch();
      const parentLayer = this.$parent.layer;
      parentLayer.setIcon(LIcon);
    },
    render(h) {
      return null;
    }
  };
</script>
