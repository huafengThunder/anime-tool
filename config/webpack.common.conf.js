const HtmlWebpackPlugin = require('html-webpack-plugin') // 打包html
const { VueLoaderPlugin } = require('vue-loader') // 处理vue的load
const ForkTsCheckerWebapckPlugin = require('fork-ts-checker-webpack-plugin')// ts类型检测
const path = require('path')
const pathResolve = _path => path.resolve(__dirname, _path) // 解析成绝对路径
const { DefinePlugin } = require('webpack')

const baseConf = {
  entry: pathResolve('../src/main.ts'),
  output: {
    path: pathResolve('../dist'),
    filename: '[name].[contenthash:8].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(t|j)s$/,
        exclude: /node_modules|bower_components/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      },
      {
        test: /.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true, // ? 关闭类型检查，即只进行转译
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: pathResolve('../src/index.html'),
      title: '动画'
    }),
    new VueLoaderPlugin(),
    new DefinePlugin({
      __VUE__OPTION_API__: false,
      __VUE_PROD__DEVTOOLS: false
    }),
    new ForkTsCheckerWebapckPlugin()
  ],
  resolve: {
    alias: {
      '@': pathResolve('../src'),
    }
  },
  optimization: {
    runtimeChunk: 'single',
  }
}
module.exports = baseConf
