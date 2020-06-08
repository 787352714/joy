const merge = require('webpack-merge');
const comment = require('./webpack.commen');

module.exports = merge(comment,{
  mode:'production'
})