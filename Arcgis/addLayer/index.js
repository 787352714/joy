require([
  "esri/Map",
  "esri/views/MapView",
  //*** ADD ***//
  "esri/layers/Layer"
], function (Map, MapView, Layer) {
  var map = new Map({
    basemap: "topo-vector"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-118.71511, 34.09042], // longitude, latitude
    zoom: 11
  });

  addLayer = (layerItemPromise,index)=>layerItemPromise.then(Layer=>{map.add(Layer,index)});

  let trailheadsPortalItem = Layer.fromPortalItem({
    portalItem: {
      id: "33fc2fa407ab40f9add12fe38d5801f5"
    }
  });

  let trailPortalItem = Layer.fromPortalItem({
    portalItem: {
      id: "52a162056a2d48409fc3b3cbb672e7da"
    }
  });

  let parkPortalItem = Layer.fromPortalItem({
    portalItem: {
      id: "52a162056a2d48409fc3b3cbb672e7da"
    }
  });
  

  addLayer(trailheadsPortalItem,2).then(addLayer(trailPortalItem,1)).then(addLayer(parkPortalItem,0))
})