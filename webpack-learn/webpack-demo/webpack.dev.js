const merge = require('webpack-merge');
const comment = require('./webpack.commen');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = merge(comment,{
  mode:'development',
  devtool:'inline-source-map',
  devServer:{
    contentBase:'./dist'
  },
  plugins:[
    new BundleAnalyzerPlugin()
  ]
})