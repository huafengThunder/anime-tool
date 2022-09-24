module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // 按需引入 polyfill
        corejs: 3
      },
      '@babel/preset-typescript',
      {
        // 这个配置是为了处理.vue文件解析后的ts文件
        allExtensions: true
      }
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', // polyfill
      {
        corejs: 3,
      }
    ],
    '@babel/plugin-proposal-class-properties', // 支持 ts 类的写法
    '@babel/plugin-proposal-object-rest-spread', // 插件会将类中的属性编译
  ],
  cacheDirectory: true
}
