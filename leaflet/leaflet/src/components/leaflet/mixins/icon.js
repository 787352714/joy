export default {
  props: {
    iconUrl: {
      type: String,
      default: ''
    },
    iconSize: {
      type: Array,
      default: () => [20, 30]
    },
    shadowUrl: {
      type: String,
      default: ''
    },
    shadowSize: {
      type: Array,
      default: () => [20, 30]
    },
    shadowAnchor: {
      type: Array,
      default: null
    },
    className: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.iconOptions = {
      iconUrl: this.iconUrl,
      iconSize: this.iconSize,
      shadowUrl: this.shadowUrl,
      shadowSize: this.shadowSize,
      shadowAnchor: this.shadowAnchor,
      className: this.className
    };
  }
};
