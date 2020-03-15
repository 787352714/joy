
import '@/assets/css/preview-image.scss';

const zPreviewImage = {
  install(Vue) {
    let previewImage = (urls = [], index = 0, callback) => {
      let validUrls = Array.isArray(urls) ? urls : [urls];
      let validIndex = index > validUrls.length - 1 ? validUrls.length - 1 : index;
      if (!this._previewInstance) {
        // 创建挂载容器
        let mount_id = 'preview-image-mount';
        let mountEle = this._createMountEle(mount_id)
        // 创建预览组件实例
        let PreviewConstructor = Vue.extend(this._createPreviewComponent());
        this._previewInstance = new PreviewConstructor({
          data: { 
            urls: validUrls, 
            index: validIndex 
          }
        });
        document.body.appendChild(mountEle);
        this._previewInstance.$mount('#' + mount_id);
        // 切换图片时的回调函数，回调参数是当前图片索引
        callback && this._previewInstance.$on('change-index', callback);
      } else {
        document.body.appendChild(this._previewInstance.$el);
        this._previewInstance.upDateUrls(validUrls, validIndex);
      }
      // 点击遮罩关闭预览
      let _handleClosePreview = e => {
        let previewContentEl = this._previewInstance.$refs.previewImage;
        if (!previewContentEl.contains(e.target)) {
          document.body.removeChild(this._previewInstance.$el);
          this._previewInstance.$el.removeEventListener('mousedown', _handleClosePreview);
        }
      }
      this._previewInstance.$el.addEventListener('mousedown', _handleClosePreview);
    }
    // 添加原型方法
    Vue.prototype.$previewImage = previewImage;
    // 注册全局组件
    Vue.component('z-img', {
      functional: true,
      render(h, {data}) { 
        console.log('data :', data);
        return (
          <div>
            {
              data.attrs.src.map(item=>{
                return <img src={item} {...data} width="100" height="100" on-click={() => previewImage(item, 0)} />
              })
            }
          </div>
        )
      }
    })
  },
  _createMountEle(id) {
    let mountEle = document.createElement('div');
    mountEle.id = id;
    return mountEle;
  },
  _createPreviewComponent() {
    return {
      data() {
        return {
          imgLoading: true,
          imgLoadErr: false,
          urls: [],
          index: 0,
          center: [0, 0],
          zoom: 1,
          minZoom: 1,
          maxZoom: 10
        }
      },
      mounted() {
        require('leaflet/dist/leaflet.css');
        const L = require('leaflet');
        this._map = L.map('preview-image', {
          center: this.center,
          zoom: this.zoom,
          minZoom: this.minZoom,
          maxZoom: this.maxZoom,
          zoomControl: false,
          attributionControl: false,
          doubleClickZoom: false,
          maxBoundsViscosity: 1.0
        });
        const mapBounds = this._map.getBounds();
        this._map.setMaxBounds(mapBounds);
        this._hideBounds = [[0, 0], [0, 0]];
        this.loadImage();
      },
      beforeDestroy() {
        this._imageOverlay.off();
        this._map.remove();
      },
      methods: {
        loadImage() {
          this.imgLoading = true;
          this.imgLoadErr = false;
          this.resetView();
          // loading期间禁用缩放
          this._map.setMaxZoom(1);
          if (!this._imageOverlay) {
            // 初始化图片图层, 先隐藏图片，计算出完美bounds后再重新设置
            this._imageOverlay = L.imageOverlay(this.imgUrl, this._hideBounds).addTo(this._map);
            this._imageOverlay.on('load', e => {
              // 获取图片原始宽高比
              let WHratio = e.currentTarget.naturalWidth / e.currentTarget.naturalHeight;
              // 计算出完美bounds
              let imageBounds = this.getImageBounds(WHratio);
              this._imageOverlay.setBounds(imageBounds);
              // 加载完成时恢复缩放
              this.imgLoading = false;
              this._map.setMaxZoom(this.maxZoom);
            })
            this._imageOverlay.on('error', () => {
              this.imgLoading = false;
              this.imgLoadErr = true;
              this._map.setMaxZoom(this.maxZoom);
            });
          } else {
            this._imageOverlay.setUrl(this.imgUrl).setBounds(this._hideBounds);
          }
        },
        getImageBounds(WHratio) {
          let imageMaxSize = this.getImageMaxSize(WHratio);
          let { startPoint, endPoint } = this.getImagePoints(imageMaxSize);
          let startBound = this._map.containerPointToLatLng(startPoint);
          let endBound = this._map.containerPointToLatLng(endPoint);;
          return [startBound, endBound];
        },
        getImageMaxSize(WHratio) {
          let pW = this.$refs.previewImage.offsetWidth;
          let pH = this.$refs.previewImage.offsetHeight;
          let tH = pW / WHratio, tW = pH * WHratio;
          return {
            width: tH <= pH ? pW : tW,
            height: tW <= pW ? pH : tH
          }
        },
        getImagePoints({width, height}) {
          let mapCenterPoint = [
            this.$refs.previewImage.offsetWidth / 2,
            this.$refs.previewImage.offsetHeight / 2
          ];
          return {
            startPoint: [mapCenterPoint[0] - width / 2, mapCenterPoint[1] - height / 2],
            endPoint: [mapCenterPoint[0] + width / 2, mapCenterPoint[1] + height / 2]
          }
        },
        handleCommond(e) {
          const commond = e.target.getAttribute('data-commond');
          let zoom = this._map.getZoom();
          switch(commond) {
            case 'arrow-left':
              this.index = this.index - 1 > 0 ? this.index - 1 : 0;
              break;
            case 'arrow-right':
              this.index = this.index + 1 < this.urls.length - 1 ? this.index + 1 : this.urls.length - 1;
              break;
            case 'zoom-in':
              this.zoom = zoom + 1 < this.maxZoom ? zoom + 1 : this.maxZoom;
              this._map.setZoom(this.zoom);
              break;
            case 'refresh':
              this.resetView(true);
              break;  
            case 'zoom-out':
              this.zoom = zoom - 1 >  this.minZoom ? zoom - 1 : this.minZoom;
              this._map.setZoom(this.zoom);
              break;
          }
        },
        upDateUrls(urls, index) {
          this.urls = urls;
          this.index = index;
        },
        resetView(animate = false) {
          this._map.setView(this.center, this.minZoom, {
            animate
          });
        }
      },
      computed: {
        imgUrl() {
          return this.urls[this.index]
        }
      },
      watch: {
        imgUrl() {
          this.$emit('change-index', this.index);
          this.loadImage();
        }
      },
      render() {
        return (
          <div class="preview-image-wrap">
            <div v-loading={this.imgLoading} element-loading-background="rgba(0, 0, 0, 1)" ref="previewImage" id='preview-image'>
              { this.imgLoadErr ? <div class="load-fail">加载失败</div> : null }
              <div class="preview-toolbar">
                <div data-commond="arrow-left" class={['bar-icon', 'el-icon-arrow-left', this.index === 0 && 'disabled']} on-click={this.handleCommond}></div>
                <div data-commond="arrow-right" class={['bar-icon', 'el-icon-arrow-right', this.index === this.urls.length - 1 && 'disabled']} on-click={this.handleCommond}></div>
                <div data-commond="zoom-in" class={['bar-icon', 'el-icon-zoom-in']} on-click={this.handleCommond}></div>
                <div data-commond="refresh" class={['bar-icon', 'el-icon-refresh']} on-click={this.handleCommond}></div>
                <div data-commond="zoom-out" class={['bar-icon', 'el-icon-zoom-out']} on-click={this.handleCommond}></div>
              </div>
            </div>
          </div>
        )
      } 
    }
  }
}
export default zPreviewImage