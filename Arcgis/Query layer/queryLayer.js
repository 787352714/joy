require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/layers/GraphicsLayer",
    "esri/Graphic"
],function(Map, MapView, FeatureLayer, GraphicsLayer, Graphic){
    var map = new Map({
        basemap: "topo-vector"
    });

    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-118.71511, 34.09042], // longitude, latitude
        zoom: 11
    });

    var featureLayer = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0",
      });

      // Layer used to draw graphics returned
    var graphicsLayer = new GraphicsLayer();

    function addGraphics(result) {
        graphicsLayer.removeAll();
        result.features.forEach(function(feature){
          var g = new Graphic({
            geometry: feature.geometry,
            attributes: feature.attributes,
            symbol: {
             type: "simple-marker",
              color: [0,0,0],
              outline: {
               width: 2,
               color: [0,255,255],
             },
              size: "20px"
            },
            popupTemplate: {
             title: "{TRL_NAME}",
             content: "This a {PARK_NAME} trail located in {CITY_JUR}."
            }
          });
          graphicsLayer.add(g);
        });
      }

      map.add(graphicsLayer);
      map.add(featureLayer);
})