const packageName = require('./package.json').name;
module.exports = {
  // 选项...
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: packageName + '-microApp',
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
  },
}
