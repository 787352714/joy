let path = require('path');

module.exports = {
  mode:'development',
  devServer:{
    port:8080,
    progress:true,
    contentBase:'./dist'
  },
  entry:'./src/index.js',
  output:{
    filename:'bundle.js',
    path: path.resolve(__dirname,'dist')
  }
}