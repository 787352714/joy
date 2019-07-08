require(
    //请求项 
    [
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
    ],

    //配置项
    function (Map, MapView, FeatureLayer) {
        //地图基本配置项
        var map = new Map({
            basemap: "topo-vector"
        });

        var view = new MapView({
            container: "viewDiv",
            map: map,
            center: [-118.71511, 34.09042], // longitude, latitude
            zoom: 11
        });
        //图层渲染基本配置项
        var trailheadsLayer = new FeatureLayer({
            url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0"
        });

        var parkLayer = new FeatureLayer({
            url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0"
        })

        var trailsLayer = new FeatureLayer({
            url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0"
        })
        //图层样式渲染
        var trailheadsRenderer = {
            type: "simple",
            symbol: {
                type: "picture-marker",
                url: "http://static.arcgis.com/images/Symbols/NPS/npsPictograph_0231b.png",
                width: "20px",
                height: "20px",
            }
        }

        var trailheadsLabels = {
            symbol: {
                type: 'text',
                color: '#ffffff',
                haloColor: '#5E8D74',
                haloSize: '2px',
                font: {
                    size: '10px',
                    family: 'Noto Sans',
                    weight: 'normal'
                }
            },
            labelPlacement: "above-center",
            labelExpressionInfo: {
                expression: "$feature.TRL_NAME"
            }

        }

        var trailheads = new FeatureLayer({
            url:
                "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0",
            renderer: trailheadsRenderer,
            labelingInfo: [trailheadsLabels]
        });


        //定义路径样式
        var trailsRenderer = {
            type: 'simple',
            symbol: {
                color: '#BA55D3',
                type: 'simple-line',
                style: 'solid'
            },
            visualVariables: [
                {
                    type: "size",
                    field: "ELEV_GAIN",
                    minDataValue: 0,
                    maxDataValue: 2300,
                    minSize: "3px",
                    maxSize: "7px"
                }
            ]
        }
        // 图层中定义路径走向和引入样式，以及透明度等样式
        var trails = new FeatureLayer({
            url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0",
            renderer: trailsRenderer,
            opacity: .75
        });

        var bikeTrailsRenderer = {
            type: "simple",
            symbol: {
                type: "simple-line",
                style: "short-dot",
                color: "#FF91FF",
                width: "1px"
            }
        };

        var bikeTrails = new FeatureLayer({
            url:
                "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0",
            renderer: bikeTrailsRenderer,
            definitionExpression: "USE_BIKE = 'YES'"
        })

        function createFillSymbol(value, color) {
            return {
                value: value,
                symbol: {
                    color: color,
                    type: "simple-fill",
                    style: "solid",
                    outline: {
                        style: "none"
                    }
                },
                label: value
            }
        }

        var openSpacesRenderer = {
            type: "unique-value",
            field: "TYPE",
            uniqueValueInfos: [
                createFillSymbol("Natural Areas", "#9E559C"),
                createFillSymbol("Regional Open Space", "#A7C636"),
                createFillSymbol("Local Park", "#149ECE"),
                createFillSymbol("Regional Recreation Park", "#ED5151")
            ]
        };

        var openSpaces = new FeatureLayer({
            url:'https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0',
            renderer:openSpacesRenderer,
            opacity:.20
        })

        map.add(openSpaces,0)
        map.add(trails, 0)
        map.add(bikeTrails, 1)
        map.add(trailheads);
        map.add(trailheadsLayer);
        map.add(parkLayer, 0);
        map.add(trailsLayer, 0)

    });