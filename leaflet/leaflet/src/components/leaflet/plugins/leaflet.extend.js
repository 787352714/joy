import L from 'leaflet';
import { Map, Layer, Point, ImageOverlay } from 'leaflet';

Map.prototype.latLngToContainerCenterPoint = function(latLng) {
  const point = this.latLngToContainerPoint(latLng);
  const domMap = this.getContainer();
  const halfWidth = domMap.offsetWidth / 2;
  const halfHeight = domMap.offsetHeight / 2;
  return {
    x: point.x - halfWidth, 
    y: point.y - halfHeight
  };
};

Layer.prototype.__extend = null; 

Layer.prototype.setExtend = function(key, val) {
  if (key.constructor === Object) {
    this.__extend = key; 
  } else {
    if (this.__extend === null) {
      this.__extend = {};
      this.__extend[key] = val;
    } else {
      this.__extend[key] = val;
    }
  }
};

Layer.prototype.getExtend = function(key) {
  if (key === undefined || key === null || this.__extend == null) {
    return this.__extend;
  } else {
    return this.__extend[key];
  }
};

Layer.prototype.setIndex = function(val) {
  this.__index = val;
};

Layer.prototype.getIndex = function() {
  return this.__index;
};

// imageOverlay bug
var style$1 = document.documentElement.style;
var ie = 'ActiveXObject' in window;
var ie3d = ie && ('transition' in style$1);

function testProp(props) {
  var style = document.documentElement.style;

  for (var i = 0; i < props.length; i++) {
    if (props[i] in style) {
      return props[i];
    }
  }
  return false;
}
var TRANSFORM = testProp(['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform']);
function setTransform(el, offset, scale) {
  var pos = offset || new Point(0, 0);

  el.style[TRANSFORM] =
    (ie3d ?
      'translate(' + pos.x + 'px,' + pos.y + 'px)' :
      'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') +
    (scale ? ' scale(' + scale + ')' : '');
}

class FixImageOverlay extends ImageOverlay {
  constructor(url, bounds, options) {
    super(url, bounds, options);
  }
  _animateZoom(e) {
    this._map = e.target;
    var scale = this._map.getZoomScale(e.zoom),
        offset = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;

    setTransform(this._image, offset, scale);
  }
}

L.ImageOverlay = FixImageOverlay;
L.imageOverlay = function(url, bounds, options) {
  return new FixImageOverlay(url, bounds, options)
};
