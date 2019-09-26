<script>
export default {
  props: {
    jsonData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    this.parentScene = this.$parent.scene;
    this.parentScene.LineLayer({
      zIndex: 2
    }).source(this.jsonData).size('ELEV', function(value) {
      return [1, (value - 1000) * 7];
    }).active(true)
      .shape('line')
      .color('ELEV', ["#E8FCFF", "#CFF6FF", "#A1E9ff", "#65CEF7", "#3CB1F0", "#2894E0", "#1772c2", "#105CB3", "#0D408C", "#002466"].reverse())
      .render();
  },
  render() {
    return null;
  }
}
</script>  