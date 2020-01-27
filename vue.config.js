"use strict";

const glob = require("glob");
const pages = {};

glob.sync("./src/pages/**/main.js").forEach(path => {
  const part = path.split("./src/pages/")[1].split("/main.js")[0];
  pages[part] = {
    entry: path,
    template: path.split("./src/pages/")[1].split("/index.html")[0]
    // chunks: ["chunk-vendors", "chunk-common", "chunk"]
  };
});

module.exports = {
  pages,
  //   chainWebpack: config => config.plugins.delete("named-chunks"),
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
        pathRewrite: { "^/api": "" }
      }
    }
  },
  
};
