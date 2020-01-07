const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // 设置路径别名
      .set('@views', resolve('src/views')) // 设置路径别名
      .set('@components', resolve('src/components')) // 设置路径别名
      .set('@api', resolve('src/api')) // 设置路径别名
  },
  css: {
    loaderOptions: {
      sass: {
        // 根据自己样式文件的位置调整
        data: `@import "@/assets/style/common.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      '/url': {
        target:  'http://rap2api.taobao.org/app/mock/238930/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/url': ''
        }
      }
    }
  },
  publicPath: process.env.VUE_APP_BASE_PATH || '/' // 系统路径
}