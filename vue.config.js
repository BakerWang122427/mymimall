/**
 * 使用webpage处理跨域问题 ,该配置命名固定为vue.config.js 里面内容使用conmmd规范 因为是给webpage使用【也可以使用ng】
 */
module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        tartet: "https://www.imooc.com",
        changeOrigin: true,
        pathRewrite: {
          "/api": ""
        }
      }
    }
  }
};
