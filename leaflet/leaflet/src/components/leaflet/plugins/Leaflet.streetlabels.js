/*
 *
 *
*/
/* eslint-disable */
L.StreetLabels = L.LabelTextCollision
        .extend({

            options : {
                /**
                 * Default property name to display the tooltip
                 */
                propertyName : 'name',
                limitZoom: null,
                showLabelIf: null,
                showArrowIf: null,
                fontStyle: {
                    dynamicFontSize: false,
                    fontSize: 10,
                    fontSizeUnit: "px",
                    lineWidth: 4.0,
                    fillStyle: "black",
                    strokeStyle: "white",
                },
                offset: [0, 0]
            },

			initialize: function (options) {
				L.LabelTextCollision.prototype.initialize.call(this, options);
				L.Util.stamp(this);
				this._layers = this._layers || {};
			},

            _initContainer : function(options) {
                L.LabelTextCollision.prototype._initContainer.call(this, options);

                //Register the add/remove layers event to update the annotations accordingly
                if (this._map) {
                    var handleLayerChanges = function() {
                        this._reset();
                        this._redraw();
                    }.bind(this);
                    this._map.on("layerremove",L.Util.throttle(handleLayerChanges, 32, this));
                }
            },

            _text : function(ctx, layer) {
                var zoom = this._map.getZoom();
                var optionsZoom = this.options.limitZoom;
                if (optionsZoom !== null && zoom < optionsZoom) return;
                if (layer && layer.feature && layer.feature.properties && layer.feature.properties[this.options.propertyName] !== undefined) {

                    if (this.options.showLabelIf) {
                        if (this.options.showLabelIf.call(this,layer.feature) === false) {
                            return;
                        }
                    }

                    var layerText = layer.feature.properties[this.options.propertyName];
                    ctx.globalAlpha = 1;
                    var p;
                    var textPoint;

					// polygon or polyline
					if (layer._parts.length === 0 || layer._parts[0].length === 0) {
						return;
					}

					if(layer instanceof L.Polygon && this._map.hasLayer(layer)) {
						p = this._getCentroid(layer);
					}
					else {
						p = this._getCenter(layer._parts[0]);
					}

                    if (!p) {
                        return;
                    }

                    // label bounds offset
                    var offset = this.options.offset || [0, 0];

                    /**
                     * TODO setting for custom font
                     */
                    ctx.lineWidth = this.options.fontStyle.lineWidth;

                    var fontSize = this.options.fontStyle.fontSize;

                    if (this._map && this.options.fontStyle.dynamicFontSize === true) {
                        fontSize = this._getDynamicFontSize();

                    }

                    ctx.font = fontSize + this.options.fontStyle.fontSizeUnit + " 'Helvetica Neue',Helvetica,Arial,sans-serif";

                    // Collision detection
                    var textWidth = (ctx.measureText(layerText).width) + p.x;// + offsetX;

                    var textHeight = p.y + offset[1] + 20;

                    var bounds = L.bounds(
                            L.point(p.x + offset[0], p.y + offset[1]), L.point(
                                    textWidth, textHeight));

                    var showArrow = this.options.showArrowIf;

                    if (this.options.collisionFlg) {

                        for ( var index in this._textList) {
                            var pointBounds = this._textList[index];
                            if (pointBounds.intersects(bounds)) {
                                return;
                            }
                        }
                    }

                    this._textList.push(bounds);


                    ctx.fillStyle = this.options.fontStyle.fillStyle;
                    ctx.strokeStyle =  this.options.fontStyle.strokeStyle;

                    if(layer instanceof L.Polygon || layer instanceof L.CircleMarker) {
                        var textLength = ctx.measureText(layerText).width;
                        ctx.strokeText(layerText, p.x + offset[0] - textLength/2, p.y + offset[1]);
                        ctx.fillText(layerText, p.x + offset[0] - textLength/2, p.y + offset[1]);
                    }
                    if (layer instanceof L.Polyline) {
                        /**
                         * Render text alongside the polyline
                         * **/
                        if (layer._parts) {
                            ctx.textAlign = "center";
                            ctx.textBaseline = "middle";
                            ctx.lineWidth = 3;
                            layer._parts.forEach(function(part){
                                //Build the points list for the first part
                                var pathPoints = [];
                                for (var i=0; i<part.length;i++) {
                                    var linePart = part[i];
                                    pathPoints.push(linePart.x);
                                    pathPoints.push(linePart.y);
                                }
                                ctx.textPath (layerText, pathPoints, offset);
                                if (showArrow) {
                                  ctx.font = "16px 'Helvetica Neue',Helvetica,Arial,sans-serif";
                                  ctx.textPath ('\u2192', pathPoints, [0,-8]);
                                }
                            });
                        }
                    }
                }
            },

            _getDynamicFontSize: function() {
                return parseInt(this._map.getZoom());
            },

            _getCentroid : function(layer) {
                if (layer && layer.getCenter && this._map) {
                    var latlngCenter = layer.getCenter();
                    var containerPoint = this._map.latLngToContainerPoint(latlngCenter);
                    return this._map.containerPointToLayerPoint(containerPoint);
                }
            },
        });
