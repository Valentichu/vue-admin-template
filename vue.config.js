const path = require('path')

module.exports = {
  chainWebpack: config => {
    // 设置默认svg loader不包含icon文件夹
    config.module
      .rule('svg')
      .exclude.add(path.resolve(__dirname, 'src', 'icons'))
      .end()

    // 添加icon loader，只处理icon文件夹
    config.module
      .rule('icon')
      .include.add(path.resolve(__dirname, 'src', 'icons'))
      .end()
      .test(/\.(svg)(\?.*)?$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
  }
}
