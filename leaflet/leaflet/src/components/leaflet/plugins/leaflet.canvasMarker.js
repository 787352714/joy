import { CircleMarker } from 'leaflet';

class CanvasMarker extends CircleMarker {
  constructor(latLng, options) {
    super(latLng, options);
    this._img = new Image();
    this._img.src = options.src;
    this._imgWidth = options.width || 20;
    this._imgHeight = options.height || 20;
  }
  _updateImg(layer) {
    if (!this._drawing || layer._empty()) { return; }

    var p = layer._point,
        ctx = this._ctx,
        offsetX = -(layer._imgWidth / 2),
        offsetY = -(layer._imgHeight / 2);

    ctx.beginPath();
    
    if (!layer._img.onload) {
      layer._img.onload = () => {
        ctx.drawImage(layer._img, p.x + offsetX, p.y + offsetY, layer._imgWidth, layer._imgHeight);
      }
    }
    ctx.drawImage(layer._img, p.x + offsetX, p.y + offsetY, layer._imgWidth, layer._imgHeight);

    this._fillStroke(ctx, layer);
  }
  _updatePath() {
    this._updateImg.call(this._renderer, this);
  }
}

L.CanvasMarker = CanvasMarker;

L.canvasMarker = function(latLng, options) {
  return new L.CanvasMarker(latLng, options);
};