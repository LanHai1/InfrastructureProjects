module.exports = {
    runtimeCompiler: true,
    publicPath: '/', // 设置打包文件相对路径
    devServer: {
        port: 8080,
        open: true, 
        proxy: {
            '/brah_553': {
                target: 'http://192.168.2.230', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/': '/'
                }
            }
        }
    },
}