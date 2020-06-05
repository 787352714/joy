const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode:"development",
  devtool:'inline-source-map',
  devServer:{
    contentBase:'./dist'
  },
  entry:{
    app:'./src/index.js',
    print:'./src/print.js'
  },
  output:{
    filename:'[name].main.js',
    path:path.resolve(__dirname,'dist')
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:'管理输出'
    })
  ],
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          "css-loader",
          "style-loader"
        ]
      }
    ]
  }
}