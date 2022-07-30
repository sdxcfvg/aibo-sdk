const { merge } = require('webpack-merge')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const common = require('./webpack.common.js')
const { resolve, PROJECT_PATH } = require('./constants')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: 'localhost',
    port: 8080,
    compress: true,
    open: true,
    hot: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:9000',
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(PROJECT_PATH, './test/index.html'),
      scriptLoading: 'blocking'
    })
  ]
})
