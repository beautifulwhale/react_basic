const { createProxyMiddleware } = require("http-proxy-middleware");
//配置代理
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:9999",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    })
  );
};

