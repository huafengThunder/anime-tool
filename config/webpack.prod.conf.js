const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 单独打包css
const TerserPlugin = require('terser-webpack-plugin') // 控制压缩 JavaScript的方式
const webpackMerge = require('webpack-merge') // webpack内置的合并对象方法
const commonConfig = require('./webpack.common.conf') // 公共配置

const prodConfig = {
  devtool: 'inline-source-map',
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
          compress: {
            drop_console: true,
            drop_debugger: false,
            pure_funcs: ['console.log'] // 移除console
          }
        },
        extractComments: false, // 去掉注释
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[id].[contenthash:8].css',
    })
  ]
}
module.exports = webpackMerge.merge(commonConfig, prodConfig)
