/**
 * @Description:
 * @author Yj
 * @date 2019/4/26 21:02
 */

module.exports = {
  publicPath: '/', // 根路径
  outputDir: 'dist', // 构建输出目录
  assetsDir: 'assets', // 静态资源目录
  lintOnSave: false, // 是否开启eslint检测 有效值 true || false || 'error'
  devServer: {
    open: true,
    host: 'localhost', // localhost || 127.0.0.0 || 0.0.0.0(真机测试）
    port: 8090,
    https: false,
    hotOnly: false,
    proxy: { // 配置跨域
      '/api': {
        target: 'http://localhost:5000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    before: function(app) {
      app.get('/some/path',function(request,response){
        request.json({ custom: response});
      });
    }
  }
}
