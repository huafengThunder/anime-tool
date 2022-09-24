const webpackMerge = require('webpack-merge') // webpack内置的合并对象方法
const commonConfig = require('./webpack.common.conf') // 公共配置
const path = require('path')
const pathJoin = _path => path.join(__dirname, _path) // 不同平台保持路径一致

const devConfig = {
  mode: 'development',
  devServer: {
    compress: true,
    static: pathJoin('./dist'),
    hot: true,
    open: true,
    port: 8000
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ],
        generator: {
          // [ext]前面自带"."
          filename: 'assets/[hash:8].[name][ext]',
        },
      }
    ]
  },
  devtool: 'inline-source-map',
  cache: {
    type: 'filesystem',
  }
}
module.exports = webpackMerge.merge(commonConfig, devConfig)
