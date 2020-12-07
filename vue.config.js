const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@views": path.resolve(__dirname, "src/views"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@comps": path.resolve(__dirname, "src/components"),
        "@store": path.resolve(__dirname, "src/store"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@api": path.resolve(__dirname, "src/api"),
      },
    },
  },
  //服务器代理：解决api跨域问题
  devServer: {
    proxy: {
      "/api": {
        target: "http://182.92.128.115",
        changeOrigin: true, //允许跨域
        // pathRewrite: {  //重写api
        //   "^/api": "",
        // },
      },
    },
  },
};
