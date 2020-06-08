const merge = require('webpack-merge');
const comment = require('./webpack.commen');
module.exports = merge(comment,{
  mode:'development',
  devtool:'inline-source-map',
  devServer:{
    contentBase:'./dist'
  },
})