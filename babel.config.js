// 生产环境下清除console打印
const plugins = []
if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console')
  // 不清除console
  // plugins.push(["transform-remove-console", { "exclude": [ "error", "warn"] }])
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
