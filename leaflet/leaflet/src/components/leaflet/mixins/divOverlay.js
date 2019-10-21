export default {
  props: {
    offset: {
      type: Array,
      default: () => [0, 0]
    },
    className: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.divOverlayOptions = {
      offset: this.offset,
      className: this.className
    };
  }
};
