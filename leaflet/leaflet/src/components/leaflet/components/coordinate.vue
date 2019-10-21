
<script>
  export default {
    inject: ['getMap'],
    props: {
      position: {
        type: Object,
        default: () => {
          return {
            right: '14px',
            bottom: '10px'
          }
        }
      },
    },
    data() {
      return {
        text: ''
      };
    },
    mounted() {
      this.mapInstance = this.getMap();
      const center = this.mapInstance.getCenter();
      this.text = `当前坐标: ${center.lng.toFixed(4)}, ${center.lat.toFixed(4)}`;
      
      this._handleMouseMove = e => {
        const latlng = e.latlng;
        this.text = `当前坐标: ${latlng.lng.toFixed(4)}, ${latlng.lat.toFixed(4)}`;
      };
      this.mapInstance.on('mousemove', this._handleMouseMove);
    },
    beforeDestroy() {
      this.mapInstance.off('mousemove', this._handleMouseMove);
    },
    render(h) {
      return h('div', {
        class: 'leaflet-coordinate',
        style: this.position
      }, this.text);
    }
  };
</script>

<style lang="scss" scoped>
.leaflet-coordinate {
  position: absolute;
  z-index: 2000;
  font-size: 12px;
  color: #505050;
  background: #D7D7D7;
  border-radius: 3px;
  padding: 0 10px;
}
</style>

