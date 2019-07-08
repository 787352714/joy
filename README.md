# joy
一些小练习和学习代码


## arcgis练习

### 配置基本的arcgis地图

arcgis基础的方法是在一个块级盒模型中引入地图层

在引入时可以配置基本的例如中心点等配置项

> 注意，在arcgis中大部分参数依赖api的传入

### 配置arcgis图层

依赖FeatureLayer包

配置过程分为三步，第一步配置基本的图层样式，包括类型，图层标志的样式（例如图标显示，点，线等）（配置renderer）。

第二步在FeatureLayer对象中引入刚刚配置的样式（renderer）以及依赖的url api（图层在地图上的展示位置依赖），以及透明度等图层表现形式

第三步是在地图中添加图层（利用map.add方法），将刚刚定义的FeatureLayer实例加入到map中，同时可以配置index（在地图中图层显示的层级）