require(
    [
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
    ],
    function (Map, MapView, FeatureLayer) {
        var map = new Map({
            basemap: "topo-vector"
        });

        var view = new MapView({
            container: "viewDiv",
            map: map,
            center: [-118.71511, 34.09042], // longitude, latitude
            zoom: 11
        });
        // var trailheadsLayer = new FeatureLayer({
        //     url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0"
        // });

        // var parkLayer = new FeatureLayer({
        //     url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0"
        // })

        // var trailsLayer = new FeatureLayer({
        //     url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0"
        // })
        // map.add(trailheadsLayer,0)
        // map.add(parkLayer,0)
        // map.add(trailsLayer,0)

        // 获取旅行者图标，加载图标点击事件

        // 定义弹窗的样式和内部包含的内容
        var popupTrailheads = {
            "title": "{TRL_NAME}",
            "content": "<b>City:</b> {CITY_JUR}<br><b>Cross Street:</b> {X_STREET}<br><b>Parking:</b> {PARKING}<br><b>Elevation:</b> {ELEV_FT} ft<br><input>"
        }

        var trailheads = new FeatureLayer({
            url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0",
            //将api获取内容加载到地图弹窗中
            outFields: ["TRL_NAME", "CITY_JUR", "X_STREET", "PARKING", "ELEV_FT"],
            //  将内容放入弹窗模板
            popupTemplate: popupTrailheads
        });

        var popupTrails = {
            "title": "Trail Information",
            "content": function(){
               return "This is {TRL_NAME} with {ELEV_GAIN} ft of climbing.";
            }
          }
    
          var trails = new FeatureLayer({
            url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails_Styled/FeatureServer/0",
            outFields: ["TRL_NAME","ELEV_GAIN"],
            popupTemplate: popupTrails
          });
          var popupOpenspaces = {
            "title": "{PARK_NAME}",
            "content": [{
              "type": "fields",
              "fieldInfos": [
                {
                  "fieldName": "AGNCY_NAME",
                  "label": "Agency",
                  "isEditable": true,
                  "tooltip": "",
                  "visible": true,
                  "format": null,
                  "stringFieldOption": "text-box"
                },
                {
                  "fieldName": "TYPE",
                  "label": "Type",
                  "isEditable": true,
                  "tooltip": "",
                  "visible": true,
                  "format": null,
                  "stringFieldOption": "text-box"
                },
                {
                  "fieldName": "ACCESS_TYP",
                  "label": "Access",
                  "isEditable": true,
                  "tooltip": "",
                  "visible": true,
                  "format": null,
                  "stringFieldOption": "text-box"
                },
                {
                  "fieldName": "GIS_ACRES",
                  "label": "Acres",
                  "isEditable": true,
                  "tooltip": "",
                  "visible": true,
                  "format": {
                    "places": 2,
                    "digitSeparator": true
                  },
                  "stringFieldOption": "text-box"
                }
              ]
            }]
          }
    
          var openspaces = new FeatureLayer({
            url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space_Styled/FeatureServer/0",
            outFields: ["TYPE","PARK_NAME", "AGNCY_NAME","ACCESS_TYP","GIS_ACRES"],
            popupTemplate: popupOpenspaces
          });
    
        map.add(openspaces,0);
        map.add(trails,0);
        map.add(trailheads);
    }
)