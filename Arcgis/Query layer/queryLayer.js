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
      function queryFeatureLayer(point, distance, spatialRelationship, sqlExpression) {
        var query = {
          geometry: point,
          distance: distance,
          spatialRelationship: spatialRelationship,
          outFields: ["*"],
          returnGeometry: true,
          where: sqlExpression
        };
        featureLayer.queryFeatures(query).then(function(result) {
          addGraphics(result, true);
        });
      }

      view.when(function(){
        queryFeatureLayer(view.center, 1500, "intersects");
      });

      view.on("click",function(event){
        queryFeatureLayer(event.mapPoint, 1500, "intersects");
      })

      function queryFeatureLayerView(point, distance, spatialRelationship, sqlExpression) {
        // Add the layer if it is missing
        if (!map.findLayerById(featureLayer.id)) {
          featureLayer.outFields = ["*"];
          map.add(featureLayer,0);
        }
        // Set up the query
        var query = {
          geometry: point,
          distance: distance,
          spatialRelationship: spatialRelationship,
          outFields: ["*"],
          returnGeometry: true,
          where: sqlExpression
        };
        // Wait for the layerview to be ready and then query features
        view.whenLayerView(featureLayer).then(function(featureLayerView) {
          if (featureLayerView.updating) {
            var handle = featureLayerView.watch("updating", function(isUpdating){
              if (!isUpdating) {
                // Execute the query
                featureLayerView.queryFeatures(query).then(function(result) {
                  addGraphics(result)
                });
                handle.remove();
              }
            });
          } else {
            // Execute the query
            featureLayerView.queryFeatures(query).then(function(result) {
              addGraphics(result);
            });
          }
        });
      }

      // view.when(function(){
      //   //*** UPDATE ***//
      //   //queryFeatureLayer(view.center, 1500, "intersects");
      //   queryFeatureLayerView(view.center, 1500, "intersects");
      // });

      view.on("click", function(event){
        //*** UPDATE ***//
        //queryFeatureLayer(event.mapPoint, 1500, "intersects");
        queryFeatureLayerView(event.mapPoint, 1500, "intersects");
      });

      map.add(graphicsLayer);
      map.add(featureLayer);
})