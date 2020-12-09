const path = require('path');
module.exports = {

  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',



  // webpack
  configureWebpack: (config) =>{
    config.resolve = {
      extensions: ['.js','json','.vue'],
      alias:{
        '@': path.resolve(__dirname, './src'),
        '@c': path.resolve(__dirname, './src/components')
      }
    }
  },


  //eslint 保存检查
  // lintOnsave: false,
  productionSourceMap: false,
  lintOnSave: false,
  // css样式
  css: {
    loaderOptions: {
      sass: {
        prependData: `
              @import"./src/styles/main.scss";
            `
      }
    }
  },

devServer: {
    port: 8013
}
};
